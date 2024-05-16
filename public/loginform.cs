private bool AuthenticateUser(string username, string password)
{
    // Connection string to your SQL Server database
    string connectionString = "Data Source=your_server;Initial Catalog=your_database;User ID=your_username;Password=your_password;";

    // SQL query to check if the username and password match
    string query = "SELECT COUNT(*) FROM YourTable WHERE username = @Username AND password = @Password";

    using (SqlConnection connection = new SqlConnection(connectionString))
    {
        using (SqlCommand command = new SqlCommand(query, connection))
        {
            // Add parameters to prevent SQL injection
            command.Parameters.AddWithValue("@Username", username);
            command.Parameters.AddWithValue("@Password", password);

            connection.Open();
            int count = (int)command.ExecuteScalar();
            return count > 0;
        }
    }
}
