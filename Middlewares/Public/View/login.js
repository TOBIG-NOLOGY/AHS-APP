<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>LOGIN</title>
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
     <div class= "form container">
            <h2>Login</h2>
            <form action="/login" attribute="post">
                 <div class="form group">
                       <label for="name">Name</label>
                       <input type="text" id="username" placeholder="enter your name" required autocomplete="off">
                 </div>
                 <div class="form group">
                       <label for="password">Password</label>
                       <input type="password" name="password" id="password" placeholder="password" required>
                 </div>
                 <button type="submit" class="submit btn">Login</button>
            </form>
            <p>Don't have an account ?<a href="/signup">Signup</a></p>
     </div>
</body>
<script>AHS</script>
</html>