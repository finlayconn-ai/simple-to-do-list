import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lryjqcqtcziqktjnefmv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyeWpxY3F0Y3ppcWt0am5lZm12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNjIyNzksImV4cCI6MjA0ODczODI3OX0.gTy_GGuEzRAXnKSHREtJstzrifdswIkjbBher8DIaqoY'

export const supabase = createClient(supabaseUrl, supabaseKey) 