import React, { useState } from "react";
import { supabase } from "./supabaseClient"; // Make sure this is configured!

function SignupForm() {
  const [form, setForm] = useState({
    full_name: "",
    property_no: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // 1. Create user in Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    // 2. Create profile row with "pending" role
    const user = data.user;
    if (user) {
      const { error: profileError } = await supabase
        .from("profiles")
        .insert([
          {
            id: user.id, // Auth user id
            full_name: form.full_name,
            property_no: form.property_no,
            role: "pending", // Only admins can approve!
          },
        ]);
      if (profileError) {
        setMessage("Signup succeeded, but there was a problem saving your details. Please contact support.");
      } else {
        setMessage("Registration successful! Your account is awaiting approval.");
      }
    } else {
      setMessage("Please check your email to confirm your registration.");
    }

    setLoading(false);
    setForm({
      full_name: "",
      property_no: "",
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold">Resident Signup</h2>
      <input
        name="full_name"
        value={form.full_name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        placeholder="Full Name"
        required
      />
      <input
        name="property_no"
        value={form.property_no}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        placeholder="Property Number (e.g. Apartment 12A)"
        required
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        type="email"
        placeholder="Email Address"
        required
      />
      <input
        name="password"
        value={form.password}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        type="password"
        placeholder="Password"
        required
        minLength={6}
      />
      <button
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded font-medium"
        type="submit"
      >
        {loading ? "Registering..." : "Sign Up"}
      </button>
      {message && <div className="text-sm mt-3">{message}</div>}
    </form>
  );
}

export default SignupForm;
