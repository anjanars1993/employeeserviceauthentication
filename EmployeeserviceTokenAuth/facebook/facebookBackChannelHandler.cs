using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net.Http;
using System.Threading.Tasks;
using System.Threading;

namespace EmployeeserviceTokenAuth.facebook
{
    public class facebookBackChannelHandler: HttpClientHandler
    {
        protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            if(!request.RequestUri.AbsolutePath.Contains("/oauth"))
            {
                request.RequestUri=new Uri( request.RequestUri.AbsolutePath.Replace("?access_token", "&access_token"));
            }
            return await base.SendAsync(request, cancellationToken);
        }
    }
}