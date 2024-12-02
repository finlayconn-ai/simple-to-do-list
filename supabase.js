import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.7/+esm'

// Initialize Supabase client
const supabaseUrl = 'https://lryjqcqtcziqktjnefmv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyeWpxY3F0Y3ppcWt0am5lZm12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNjIyNzksImV4cCI6MjA0ODczODI3OX0.gTy_GGuEzRAXnKSHREtJstzrifdswIkjbBher8DIaqo'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export { supabase } 