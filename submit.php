<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registration Successful</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Registration Details</h1>
    <p><strong>Full Name:</strong> <?php echo $_POST['fullname']; ?></p>
    <p><strong>Email:</strong> <?php echo $_POST['email']; ?></p>
    <p><strong>Gender:</strong> <?php echo $_POST['gender']; ?></p>
    <p><strong>Course:</strong> <?php echo $_POST['course']; ?></p>
    <p><strong>Address:</strong> <?php echo $_POST['address']; ?></p>
    <br>
    <a href="index.html"><button>Go Back</button></a>
  </div>
</body>
</html>
