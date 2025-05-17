"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

const ADMIN_EMAIL = 'tarun.gupta2606@gmail.com';

const AdminPortalPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check current authentication state
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          throw error;
        }

        // If no session or user, redirect to login
        if (!session || !session.user) {
          router.replace('/admin'); // Redirect to admin login page
          return;
        }

        // Check if user is the admin
        if (session.user.email !== ADMIN_EMAIL) {
          // Not admin, sign out and redirect
          await supabase.auth.signOut();
          router.replace('/admin');
          return;
        }

        // User is authenticated and is admin
        setUser(session.user);
        setLoading(false);
      } catch (error) {
        console.error('Authentication error:', error);
        router.replace('/admin');
      }
    };

    checkAuth();

    // Set up auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        router.replace('/admin');
      } else if (session.user.email !== ADMIN_EMAIL) {
        await supabase.auth.signOut();
        router.replace('/admin');
      }
    });

    // Cleanup listener on unmount
    return () => {
      if (authListener && authListener.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, [router]);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-gray-700">Loading admin portal...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Admin Portal</h1>
            <button
              onClick={async () => {
                await supabase.auth.signOut();
                router.push('/admin');
              }}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Sign Out
            </button>
          </div>
          <p className="text-gray-600 mt-2">Welcome, {user?.email}</p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
          <div className="space-y-4">
            {/* Your admin content goes here */}
            <p>Welcome to the admin portal. This page is protected and only accessible to authenticated admin users.</p>
            
            {/* Example admin sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                <h3 className="font-medium text-gray-800">Users Management</h3>
                <p className="text-gray-600 text-sm mt-1">Manage application users</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                <h3 className="font-medium text-gray-800">Content Management</h3>
                <p className="text-gray-600 text-sm mt-1">Manage website content</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                <h3 className="font-medium text-gray-800">Settings</h3>
                <p className="text-gray-600 text-sm mt-1">Configure application settings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPortalPage;