// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://prbadeuavftimzjiiybf.supabase.co"  // Replace with your Supabase project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByYmFkZXVhdmZ0aW16amlpeWJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0MjcxNTgsImV4cCI6MjA2MjAwMzE1OH0.e9jGyFAy7yic2pRoOCAcK-b-IlkMi2YcyTZSkdNFewY'  // Replace with your Supabase anon/public key

export const supabase = createClient(supabaseUrl, supabaseKey)
