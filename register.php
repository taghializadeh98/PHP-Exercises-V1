<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>ثبت نام در سایت</title>
<link rel="stylesheet" type="text/css" href="styles/style1.css" />
<script language="javascript" type="text/javascript" src="js/myjquery.js">  </script>	
</head>

<body id="t1" >
<div align="center">
	<br/><br/><br/><br/><br/>
<b  >فرم ثبت نام</b>
</div><br/>
	
	<form method="post" onSubmit="return do_register();" >
		
<table border="0" dir="rtl" align="center">
<tr> <td>نام کاربری :</td>  <td><input type="text" id="username" name="username" /></td> </tr>
	
<tr><td> کلمه عبور : </td><td> <input type="password" id="pass1" name="pass1" /> </td></tr>
<tr><td> تکرار کلمه عبور : </td><td> <input type="password" id="pass2" name="pass2" /> </td></tr>		
<tr><td> ایمیل : </td><td> <input type="text" id="email" name="email" /> </td></tr>	
<tr><td> جنسیت: </td><td> 
	
<label>مرد : <input type="radio" id="gender1" name="gender" value="1"  /></label>
<label>زن : <input type="radio" id="gender2" name="gender" value="0" /></label>
</td></tr>
	
<tr><td> شهر : </td><td>  
<select id="city" name="city">

<option value="0"  >لطفا شهر را انتخاب کنید</option>	
<option value="1" >تهران</option>	
<option value="2" >کرج</option>		
<option value="3"  >رشت</option>	
	
	
</select>	
		
</td></tr>	
	
<tr><td> قوانین : </td><td> 
	
<textarea readonly="readonly" >
a
a
a
a
	
	
</textarea>	
	
	
</td></tr>	
	
<tr><td colspan="2" > <label> من قوانین را قبول دارم : <input type="checkbox" id="acp" name="icp"  /> </label></td></tr>	
	
<tr><td colspan="2" > 
	
	
<input type="submit" id="register"	 name="register" value="ثبت نام" />  

<input type="reset" value="دوباره" /> </td></tr>	
	
	
</table>
	
  
		

 
	</form>
</body>
</html>