using Prism.Common;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Linq;
using Microsoft.Extensions.Logging;

namespace TestApiFunction.Helpers
{
    public class EmbeddedResource
    {
        public static string CorrectPath(string path, string nameDirectoryOrFile, string separator)
        {
            List<string> pathSep = new List<string>();
            string sep = @"\";
            pathSep.AddRange(path.Split(sep));
            if(pathSep.Contains("bin"))
              pathSep.Remove("bin");
            if(pathSep.Contains("Debug"))
              pathSep.Remove("Debug");
            if(pathSep.Contains("netcoreapp3.1"))
              pathSep.Remove("netcoreapp3.1");
            string tmpCorr = String.Empty;
            foreach(string pathCorr in pathSep)
            {
                if (!pathCorr.Equals(nameDirectoryOrFile))
                    tmpCorr += pathCorr + separator;
                else
                    tmpCorr += pathCorr;
            }
            return tmpCorr;
        }
        public static string GetFileFromDirectory(int indexFileFromDirectory, ILogger log)
        {
            try
            {
                DirectoryInfo directoryInfo = new DirectoryInfo("Sprites");
                string correctPath = CorrectPath(directoryInfo.FullName, "Sprites", @"\\");
                string fileName = String.Empty;
                if(Directory.Exists(correctPath))
                {
                    fileName = Directory.GetFiles(correctPath)[indexFileFromDirectory];
                    if (fileName != null)
                    {
                        string[] fileNameOne = fileName.Split(@"\");
                        correctPath = $@"{CorrectPath(directoryInfo.FullName, "Sprites", @"\")}\{fileNameOne[fileNameOne.Length - 1]}";
                        log.LogInformation($"correctPath: {correctPath}");
                        return correctPath;
                    }                    
                    return "FAILED";
                }
                return String.Empty;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public static string GetFileFromDirectory(string nameFile)
        {
            try
            {
                DirectoryInfo directoryInfo = new DirectoryInfo("Sprites");
                string correctPath = CorrectPath(directoryInfo.FullName, "Sprites", @"\\");
                List<string> fileNames = new List<string>();
                string fileName = String.Empty;
                if(Directory.Exists(correctPath))
                {
                    fileNames.AddRange(Directory.GetFiles(correctPath));
                    string tempFileName = $@"{correctPath}\{nameFile}.webp";
                    fileName = fileNames.Where(elem => elem.Contains(tempFileName)).First();
                    if(fileName != null)
                    {
                        correctPath = $@"{CorrectPath(directoryInfo.FullName, "Sprites", @"\")}\{nameFile}.webp";
                        return correctPath;
                    }                
                }
                return "FAILED";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}
