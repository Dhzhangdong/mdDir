using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using System.Text.Encodings.Web;

namespace DocSite.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class PublicApiController : ControllerBase
    {
        private readonly IWebHostEnvironment hostingEnvironment;
        public PublicApiController(IWebHostEnvironment hostingEnvironment)
        {
            this.hostingEnvironment= hostingEnvironment;
        }
        private const string docPath = "doc";
        [HttpGet]
        [ResponseCache(Duration = 5)]
        public DocItem getDir(string id)
        {
            var tmp= GetDicFiles(new DirectoryInfo(Path.Combine(hostingEnvironment.WebRootPath, docPath,id)), Path.Combine(hostingEnvironment.WebRootPath));
            return new DocItem
            {
                name = id,
                logo = id + "/logo.png",
                menu = tmp
            };
        }

        [HttpGet]
        [ResponseCache(Duration = 5)]
        public List<DocItem> getDoc()
        {
            var output = new List<DocItem> ();
            var dir = new DirectoryInfo(Path.Combine(hostingEnvironment.WebRootPath, docPath));
             dir.GetDirectories().ToList().ForEach(x =>
            {
                var tmp=new DocItem { 
                    name=GetName(x.Name),
                    path=x.Name,
                    logo=x.Name+"/logo.png",
                };
                output.Add(tmp);
                var descfile = x.FullName + "/setting.txt";
                if (System.IO.File.Exists(descfile)) {
                    var settings = System.IO.File.ReadAllText(descfile).Split("\n");
                    tmp.desc=settings[1].Trim();
                    tmp.home=settings[0];
                }else{
                    //按顺序检查文档
                    var homeFile=new string[]{"start","home","begin","开始","主页","总览"};
                    for(var i=0;i<homeFile.Length;i++){
                        var one=homeFile[i];
                        var onepath=x.FullName+"/"+one+".md";
                        if(System.IO.File.Exists(onepath)){
                            tmp.home=one;
                            break;
                        }
                    }
                }
            });
            return output;
        }

        private static List<DirItem> GetDicFiles(DirectoryInfo dic,string basePaht)
        {
            var files = new List<DirItem>();
            if (dic.Exists)
            {
                foreach (var item in dic.GetFiles("*.md"))
                {
                    files.Add(new DirItem { name = GetName(item.Name.TrimEnd(".md".ToArray())), path = Uri.EscapeUriString(item.FullName.Substring(basePaht.Length).TrimEnd(".md".ToArray()).Replace("\\", "/")) });
                    //files.Add(new DirItem { name = item.Name.TrimEnd(".md".ToArray()), path = item.FullName.Substring(basePaht.Length).TrimEnd(".md".ToArray()).Replace("\\", "/") });
                }
                foreach (var item in dic.GetDirectories())
                {
                    files.Add(new DirItem
                    {
                        name = GetName(item.Name) ,
                        path = item.FullName.Substring(basePaht.Length).Replace("\\","/"),
                        routes = GetDicFiles(item, basePaht)
                    });
                }
            }
            return files;
        }

        private static string GetName(string name){
            if(name.IndexOf(" ")!=-1){
                var number=name.Split(" ")[0];
                int num;
                if(int.TryParse(number,out num)){
                    return name.Split(" ")[1];
                }else{
                    return name;
                }
            }else{
                return name;
            }
        }

        //private static List<DirItem> GetFiles(DirectoryInfo dic, string basePaht)
        //{
        //    foreach (var item in dic.GetFiles())
        //    {
        //        files.Add(item.FullName);
        //    }
        //    foreach (var item in dic.GetDirectories())
        //    {
        //        GetFiles(item, files);
        //    }
        //}
    }

    public class DirItem
    {
        public string name { get; set; }
        public string path { get; set; }
        public List<DirItem> routes { get; set; }
    }

    public class DocItem
    {
        public string name { get; set; }
        public string path {get;set;}
        public string logo { get; set; }
        public string desc { get; set; }
        public string home{get;set;}

        public List<DirItem> menu { get; set; }
    }
}