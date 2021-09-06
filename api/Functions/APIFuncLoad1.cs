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
    public static class APIFuncLoad1
    {
        [FunctionName("APIFuncLoad1")]
        public static async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req, ILogger log)
        {
            try
            {
                log.LogInformation("Get Start of file");
                string name = req.Query["name"];
                string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
                dynamic data = JsonConvert.DeserializeObject(requestBody);
                name = name ?? data?.name;
                log.LogInformation("This HTTP triggered function executed successfully.");
                return new OkObjectResult(EmbeddedResource.GetFileFromDirectory(name));
            }
            catch(Exception ex)
            {
                return new BadRequestObjectResult(ex.Message);
            }
        }
    }
}
