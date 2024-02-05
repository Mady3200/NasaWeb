using System.Net.Http.Json;
using FirstApp.Models;

namespace FirstApp.Clients;
public class NasaClient{

    private readonly HttpClient _client;
    public NasaClient(HttpClient client){
        _client=client;
    }
public async Task<NasaResponse> GetNasa(string date){
    var url = "https://api.nasa.gov/planetary/apod?api_key=yy4ytLChwdk1zcwOwUxrppNsCbNbCsINHpYSzxjY";
if(date != null){
 url += "&date=" + date;
}

    return await _client.GetFromJsonAsync<NasaResponse>(url);
}
}