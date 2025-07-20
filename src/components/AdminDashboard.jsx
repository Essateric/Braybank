import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Upload,
  File,
  FileText,
  Image,
  Download,
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Send,
  UserPlus,
  Shield,
  LogOut,
  Home,
  CheckCircle,
  XCircle,
  Clock,
  Folder,
  Calendar
} from 'lucide-react';

const AdminDashboard = ({ admin, onLogout }) => {
  const [activeTab, setActiveTab] = useState('users');
  const [files, setFiles] = useState([
    {
      id: 1,
      name: 'Community Newsletter - January 2024.pdf',
      type: 'pdf',
      size: '2.4 MB',
      uploadDate: '2024-01-15',
      uploadedBy: 'Estate Administrator',
      category: 'Newsletter'
    },
    {
      id: 2,
      name: 'Board Meeting Minutes - December 2023.pdf',
      type: 'pdf',
      size: '1.8 MB',
      uploadDate: '2024-01-10',
      uploadedBy: 'Estate Administrator',
      category: 'Minutes'
    },
    {
      id: 3,
      name: 'Estate Guidelines Update.pdf',
      type: 'pdf',
      size: '3.2 MB',
      uploadDate: '2024-01-08',
      uploadedBy: 'Estate Administrator',
      category: 'Guidelines'
    },
    {
      id: 4,
      name: 'Summer BBQ Photos 2023.zip',
      type: 'zip',
      size: '15.6 MB',
      uploadDate: '2023-08-20',
      uploadedBy: 'Estate Administrator',
      category: 'Photos'
    }
  ]);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Smith',
      tel: '+44 7700 900123',
      email: 'john.smith@example.com',
      role: 'resident',
      status: 'active',
      propertyNumber: 'Apartment 12A',
      dateAcquired: '2023-06-15',
      joinDate: '2024-01-15',
      lastLogin: '2024-01-20'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      tel: '+44 7700 900456',
      email: 'sarah.johnson@example.com',
      role: 'resident',
      status: 'pending',
      propertyNumber: 'Townhouse 5',
      dateAcquired: '2023-12-01',
      joinDate: '2024-01-18',
      lastLogin: null
    },
    {
      id: 3,
      name: 'Mike Wilson',
      tel: '+44 7700 900789',
      email: 'mike.wilson@example.com',
      role: 'resident',
      status: 'inactive',
      propertyNumber: 'Apartment 8B',
      dateAcquired: '2022-03-10',
      joinDate: '2023-12-10',
      lastLogin: '2024-01-10'
    }
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [fileSearchTerm, setFileSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showUserModal, setShowUserModal] = useState(false);
  const [showFileModal, setShowFileModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [newUser, setNewUser] = useState({
    name: '',
    tel: '',
    email: '',
    propertyNumber: '',
    dateAcquired: '',
  });
  const [newFile, setNewFile] = useState({
    name: '',
    category: 'Newsletter',
    description: '',
    file: null
  });
  const [newsletters, setNewsletters] = useState([
    {
      id: 1,
      title: 'Community Newsletter - January 2024',
      description: 'New year updates, upcoming events, and community announcements.',
      type: 'current',
      uploadDate: '2024-01-15',
      fileSize: '2.4 MB',
      downloadCount: 45,
      status: 'published'
    },
    {
      id: 2,
      title: 'Holiday Newsletter - December 2023',
      description: 'Holiday celebrations, year-end summary, and festive community events.',
      type: 'current',
      uploadDate: '2023-12-20',
      fileSize: '3.1 MB',
      downloadCount: 78,
      status: 'published'
    },
    {
      id: 3,
      title: 'Autumn Newsletter - October 2023',
      description: 'Seasonal updates, maintenance schedules, and community improvements.',
      type: 'archive',
      uploadDate: '2023-10-15',
      fileSize: '2.8 MB',
      downloadCount: 92,
      status: 'archived'
    }
  ]);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [newNewsletter, setNewNewsletter] = useState({
    title: '',
    description: '',
    type: 'current',
    file: null
  });
  const [newsletterSearchTerm, setNewsletterSearchTerm] = useState('');
  const [filterNewsletterType, setFilterNewsletterType] = useState('all');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.propertyNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const filteredFiles = files.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(fileSearchTerm.toLowerCase()) ||
                         file.category.toLowerCase().includes(fileSearchTerm.toLowerCase());
    const matchesFilter = filterCategory === 'all' || file.category === filterCategory;
    return matchesSearch && matchesFilter;
  });

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const user = {
      id: users.length + 1,
      ...newUser,
      role: 'resident',
      status: 'pending',
      joinDate: new Date().toISOString().split('T')[0],
      lastLogin: null
    };
    
    setUsers([...users, user]);
    setNewUser({ name: '', tel: '', email: '', propertyNumber: '', dateAcquired: '' });
    setShowUserModal(false);
    
    // Simulate sending invitation email
    alert(`Invitation email sent to ${user.email}`);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    
    if (!newFile.file) {
      alert('Please select a file to upload');
      return;
    }
    
    const file = {
      id: files.length + 1,
      name: newFile.file.name,
      type: newFile.file.name.split('.').pop().toLowerCase(),
      size: (newFile.file.size / (1024 * 1024)).toFixed(1) + ' MB',
      uploadDate: new Date().toISOString().split('T')[0],
      uploadedBy: admin.name,
      category: newFile.category,
      description: newFile.description
    };
    
    setFiles([file, ...files]);
    setNewFile({ name: '', category: 'Newsletter', description: '', file: null });
    setShowFileModal(false);
    
    alert(`File "${file.name}" uploaded successfully`);
  };

  const handleDeleteUser = (userId) => {
    if (confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  const handleDeleteFile = (fileId) => {
    if (confirm('Are you sure you want to delete this file?')) {
      setFiles(files.filter(file => file.id !== fileId));
    }
  };

  const handleCreateNewsletter = async (e) => {
    e.preventDefault();
    
    if (!newNewsletter.file) {
      alert('Please select a newsletter file to upload');
      return;
    }
    
    const newsletter = {
      id: newsletters.length + 1,
      title: newNewsletter.title,
      description: newNewsletter.description,
      type: newNewsletter.type,
      uploadDate: new Date().toISOString().split('T')[0],
      fileSize: (newNewsletter.file.size / (1024 * 1024)).toFixed(1) + ' MB',
      downloadCount: 0,
      status: newNewsletter.type === 'current' ? 'published' : 'archived'
    };
    
    setNewsletters([newsletter, ...newsletters]);
    setNewNewsletter({ title: '', description: '', type: 'current', file: null });
    setShowNewsletterModal(false);
    
    alert(`Newsletter "${newsletter.title}" uploaded successfully`);
  };

  const handleDeleteNewsletter = (newsletterId) => {
    if (confirm('Are you sure you want to delete this newsletter?')) {
      setNewsletters(newsletters.filter(newsletter => newsletter.id !== newsletterId));
    }
  };

  const filteredNewsletters = newsletters.filter(newsletter => {
    const matchesSearch = newsletter.title.toLowerCase().includes(newsletterSearchTerm.toLowerCase()) ||
                         newsletter.description.toLowerCase().includes(newsletterSearchTerm.toLowerCase());
    const matchesFilter = filterNewsletterType === 'all' || newsletter.type === filterNewsletterType;
    return matchesSearch && matchesFilter;
  });

  const handleLogout = () => {
    // Navigate back to home page
    window.location.href = '/';
    onLogout();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'inactive': return <XCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf': return <FileText className="h-5 w-5 text-red-500" />;
      case 'doc':
      case 'docx': return <FileText className="h-5 w-5 text-blue-500" />;
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif': return <Image className="h-5 w-5 text-green-500" />;
      case 'zip':
      case 'rar': return <Folder className="h-5 w-5 text-yellow-500" />;
      default: return <File className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-semibold text-gray-900">Braybank Admin</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {admin.name}</span>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('users')}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'users'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Users className="h-4 w-4 mr-2" />
              User Management
            </button>
            <button
              onClick={() => setActiveTab('files')}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'files'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Upload className="h-4 w-4 mr-2" />
              File Upload
            </button>
            <button
              onClick={() => setActiveTab('newsletters')}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === 'newsletters'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileText className="h-4 w-4 mr-2" />
              Newsletters
            </button>
          </nav>
        </div>

        {/* User Management Tab */}
        {activeTab === 'users' && (
          <div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Users</p>
                    <p className="text-2xl font-semibold text-gray-900">{users.length}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Active Users</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {users.filter(u => u.status === 'active').length}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Pending</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {users.filter(u => u.status === 'pending').length}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <XCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Inactive</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {users.filter(u => u.status === 'inactive').length}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                <button
                  onClick={() => setShowUserModal(true)}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add User
                </button>
              </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phone
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Property
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date Acquired
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Join Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Login
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {user.tel}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {user.propertyNumber}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {user.dateAcquired}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                            {getStatusIcon(user.status)}
                            <span className="ml-1 capitalize">{user.status}</span>
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {user.joinDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {user.lastLogin || 'Never'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end space-x-2">
                            <button
                              onClick={() => {
                                // You can implement email functionality here if needed
                                alert(`Send email to ${user.email}`);
                              }}
                              className="text-blue-600 hover:text-blue-900 p-1"
                              title="Send Email"
                            >
                              <Send className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => setSelectedUser(user)}
                              className="text-gray-600 hover:text-gray-900 p-1"
                              title="Edit User"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteUser(user.id)}
                              className="text-red-600 hover:text-red-900 p-1"
                              title="Delete User"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* File Upload Tab */}
        {activeTab === 'files' && (
          <div>
            {/* File Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <File className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Files</p>
                    <p className="text-2xl font-semibold text-gray-900">{files.length}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Documents</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {files.filter(f => ['pdf', 'doc', 'docx'].includes(f.type)).length}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Image className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Images</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {files.filter(f => ['jpg', 'jpeg', 'png', 'gif'].includes(f.type)).length}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">This Month</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {files.filter(f => f.uploadDate.startsWith('2024-01')).length}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* File Controls */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search files..."
                      value={fileSearchTerm}
                      onChange={(e) => setFileSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    <option value="Newsletter">Newsletter</option>
                    <option value="Minutes">Minutes</option>
                    <option value="Guidelines">Guidelines</option>
                    <option value="Photos">Photos</option>
                    <option value="Documents">Documents</option>
                  </select>
                </div>
                <button
                  onClick={() => setShowFileModal(true)}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload File
                </button>
              </div>
            </div>

            {/* Files Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        File
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Size
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Upload Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Uploaded By
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredFiles.map((file) => (
                      <tr key={file.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {getFileIcon(file.type)}
                            <div className="ml-3">
                              <div className="text-sm font-medium text-gray-900">{file.name}</div>
                              {file.description && (
                                <div className="text-sm text-gray-500">{file.description}</div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {file.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {file.size}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {file.uploadDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {file.uploadedBy}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end space-x-2">
                            <button
                              onClick={() => alert(`Download ${file.name}`)}
                              className="text-blue-600 hover:text-blue-900 p-1"
                              title="Download File"
                            >
                              <Download className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => setSelectedFile(file)}
                              className="text-gray-600 hover:text-gray-900 p-1"
                              title="Edit File"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteFile(file.id)}
                              className="text-red-600 hover:text-red-900 p-1"
                              title="Delete File"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Newsletters Management Tab */}
        {activeTab === 'newsletters' && (
          <div>
            {/* Newsletter Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Newsletters</p>
                    <p className="text-2xl font-semibold text-gray-900">{newsletters.length}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Current</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {newsletters.filter(n => n.type === 'current').length}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Folder className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Archived</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {newsletters.filter(n => n.type === 'archive').length}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Download className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Downloads</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      {newsletters.reduce((sum, n) => sum + n.downloadCount, 0)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Controls */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search newsletters..."
                      value={newsletterSearchTerm}
                      onChange={(e) => setNewsletterSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <select
                    value={filterNewsletterType}
                    onChange={(e) => setFilterNewsletterType(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Types</option>
                    <option value="current">Current</option>
                    <option value="archive">Archived</option>
                  </select>
                </div>
                <button
                  onClick={() => setShowNewsletterModal(true)}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Newsletter
                </button>
              </div>
            </div>

            {/* Newsletters Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Newsletter
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Upload Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        File Size
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Downloads
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredNewsletters.map((newsletter) => (
                      <tr key={newsletter.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 text-blue-500 mr-3" />
                            <div>
                              <div className="text-sm font-medium text-gray-900">{newsletter.title}</div>
                              <div className="text-sm text-gray-500">{newsletter.description}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            newsletter.type === 'current' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {newsletter.type === 'current' ? 'Current' : 'Archived'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {newsletter.uploadDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {newsletter.fileSize}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {newsletter.downloadCount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            newsletter.status === 'published' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {newsletter.status === 'published' ? 'Published' : 'Archived'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end space-x-2">
                            <button
                              onClick={() => alert(`Download ${newsletter.title}`)}
                              className="text-blue-600 hover:text-blue-900 p-1"
                              title="Download Newsletter"
                            >
                              <Download className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => alert(`Edit ${newsletter.title}`)}
                              className="text-gray-600 hover:text-gray-900 p-1"
                              title="Edit Newsletter"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteNewsletter(newsletter.id)}
                              className="text-red-600 hover:text-red-900 p-1"
                              title="Delete Newsletter"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add User Modal */}
      {showUserModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New User</h2>
            <form onSubmit={handleCreateUser} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={newUser.tel}
                  onChange={(e) => setNewUser({ ...newUser, tel: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+44 7700 900123"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property Number
                </label>
                <input
                  type="text"
                  value={newUser.propertyNumber}
                  onChange={(e) => setNewUser({ ...newUser, propertyNumber: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Apartment 12A"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date Property Acquired
                </label>
                <input
                  type="date"
                  value={newUser.dateAcquired}
                  onChange={(e) => setNewUser({ ...newUser, dateAcquired: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowUserModal(false)}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Create User & Send Invitation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* File Upload Modal */}
      {showFileModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload File</h2>
            <form onSubmit={handleFileUpload} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select File
                </label>
                <input
                  type="file"
                  onChange={(e) => setNewFile({ ...newFile, file: e.target.files[0] })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.zip,.rar"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Supported formats: PDF, DOC, DOCX, JPG, PNG, GIF, ZIP, RAR
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={newFile.category}
                  onChange={(e) => setNewFile({ ...newFile, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="Newsletter">Newsletter</option>
                  <option value="Minutes">Minutes</option>
                  <option value="Guidelines">Guidelines</option>
                  <option value="Photos">Photos</option>
                  <option value="Documents">Documents</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description (Optional)
                </label>
                <textarea
                  value={newFile.description}
                  onChange={(e) => setNewFile({ ...newFile, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Brief description of the file..."
                />
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowFileModal(false)}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Upload File
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Newsletter Modal */}
      {showNewsletterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Add Newsletter</h2>
            <form onSubmit={handleCreateNewsletter} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Newsletter Title
                </label>
                <input
                  type="text"
                  value={newNewsletter.title}
                  onChange={(e) => setNewNewsletter({ ...newNewsletter, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Community Newsletter - February 2024"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={newNewsletter.description}
                  onChange={(e) => setNewNewsletter({ ...newNewsletter, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Brief description of newsletter content..."
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Newsletter Type
                </label>
                <select
                  value={newNewsletter.type}
                  onChange={(e) => setNewNewsletter({ ...newNewsletter, type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="current">Current Newsletter</option>
                  <option value="archive">Archive Newsletter</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Newsletter File
                </label>
                <input
                  type="file"
                  onChange={(e) => setNewNewsletter({ ...newNewsletter, file: e.target.files[0] })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  accept=".pdf,.doc,.docx"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Supported formats: PDF, DOC, DOCX
                </p>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowNewsletterModal(false)}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Upload Newsletter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;