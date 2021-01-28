package StepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepdefination {
WebDriver driver;

 @Given("^user is already on fb login page$")
public void user_is_already_on_fb_login_page(){
	 System.setProperty("webdriver.chrome.driver","C:\\Users\\Public\\Documents\\selenium softy\\chromedriver_win32 (1)\\chromedriver.exe");
   driver = new ChromeDriver();
   driver.manage().deleteAllCookies();
   driver.manage().window().maximize();
   driver.get("https://www.facebook.com/");
}
 
 @When("^tittle of login page is Facebook$")
 public void tittle_of_login_page_is_Facebook() {
	 String img=driver.getTitle();
	 System.out.println(img);
 }
 
 @Then("^user enters username and password$")
 public void user_enters_username_and_password() {
	 driver.findElement(By.xpath("//*[@name='email']")).sendKeys("7978662404");

	 driver.findElement(By.xpath("//*[@name='pass']")).sendKeys("7978662404");

 }
 
 @Then("^user click on login button$")
 public void user_click_on_login_button() {
	
	 driver.findElement(By.xpath("//*[@name='login']")).click();
 }
 
 @Then ("^user is on homepage$")
 public void user_is_on_homepage() {
	 driver.close();
 }
	
}
