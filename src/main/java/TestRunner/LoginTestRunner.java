package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;
@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"src/main/java/Features/login2.feature" },
		glue= {"StepDefination" }
		,plugin = {"pretty" , "html:test-output"}
, monochrome = true , dryRun = false 
		)
public class LoginTestRunner {

}
