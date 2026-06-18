<!DOCTYPE html> 
<html> 
<head> 
<title>Student Registration Form</title> 
<link rel="stylesheet" href="style.css">
</head> 
<body> 
    <header class="site-header">
    <nav class="navbar"> 
    <div class="logo">SHOPMALL</div> 
    <div class="nav-links"> 
      <li><a href="home.html">Home</a></li> 
      
    </div> 
  </nav>
  </header>
 <fieldset>
    <h1 align="center">ShopMall Profile</h1> 
    <hr> 
 
    <!-- Registration Form --> 
    <form method="post" action="submit.html" align="center"> 
 
        <!-- Full Name --> 
        <p> 
            <label>Full Name: </label> 
            <input type="text" name="fullname" placeholder="Enter your full name" required> 
        </p> 
 
        <!-- Email with validation --> 
        <p> 
            <label>Email: </label> 
            <input type="email" name="email" placeholder="Enter valid email address" required> 
        </p> 
 
        <!-- Gender (Radio Buttons) --> 
        <p> 
            <label>Gender: </label> 
            <input type="radio" name="gender" value="male" required> Male 
            <input type="radio" name="gender" value="female"> Female 
         
        </p>
        <!-- Contact Number --> 
        <p> 
            <label >Contact No: </label> 
            <input type="tel" name="contact" placeholder="Enter phone number" max="10" required> 
        </p> 
        <!-- Address (Textarea) --> 
        <p> 
            <label>Address: </label><br> 
            <textarea name="address" rows="4" cols="40" placeholder="Enter your address" required></textarea> 
        </p> 
        <!-- Submit and Reset --> 
        <p> 
            <input type="submit" value="Register"> 
            <input type="reset" value="Clear"> 
        </p> 
    </form> 
 
    <hr> 
    <p align="center">&copy; 2026 Customers Registration Portal</p> 
 </fieldset>
</body> 
</html>
