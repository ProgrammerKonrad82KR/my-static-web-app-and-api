using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using TestApiFunction.Helpers;

namespace TestApiFunction.Functions
{
    public static class APIFuncLoad2
    {
        [FunctionName("APIFuncLoad2")]
        public static async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req, ILogger log)
        {
            try
            {
                log.LogInformation("Get Start of file");
                string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
                log.LogInformation("requestBody: {requestBody}");
                dynamic data = JsonConvert.DeserializeObject(requestBody);
                log.LogInformation("data: {data}");
                log.LogInformation("This HTTP triggered function executed successfully.");
                Random rand = new Random();
                //log.LogInformation("Get Start of file");
                return new OkObjectResult(EmbeddedResource.GetFileFromDirectory(rand.Next(0, 6), log));
            }
            catch(Exception ex)
            {
                log.LogInformation("ERROR: {ex.Message}");
                return new BadRequestObjectResult(ex.Message);
            }
        }
    }
}
