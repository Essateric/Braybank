// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://moktjbneslnisiuthkcy.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1va3RqYm5lc2xuaXNpdXRoa2N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2OTc3ODcsImV4cCI6MjA2OTI3Mzc4N30.pHIETVu1LQh8nCDBecKS_fyb4YZwOVjinOI3b7FZEWM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
