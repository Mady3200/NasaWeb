package com.madhav.Webg;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class controllers_api {

    @GetMapping("/apod")
    public ResponseEntity<Object> getAPOD(
            @RequestParam(value = "date", required = false) String date,
            @RequestParam(value = "start_date", required = false) String startDate,
            @RequestParam(value = "end_date", required = false) String endDate,
            @RequestParam(value = "count", required = false) Integer count,
            @RequestParam(value = "thumbs", required = false) Boolean thumbs) {

        // Construct URL with query parameters
        StringBuilder apiUrlBuilder = new StringBuilder("https://api.nasa.gov/planetary/apod?api_key=3IcsYeUCgSgykeeA0HvKG1LvMD88KX7xJhueA5x2");
        if (date != null) {
            apiUrlBuilder.append("&date=").append(date);
        }
        if (startDate != null) {
            apiUrlBuilder.append("&start_date=").append(startDate);
        }
        if (endDate != null) {
            apiUrlBuilder.append("&end_date=").append(endDate);
        }
        if (count != null) {
            apiUrlBuilder.append("&count=").append(count);
        }
        if (thumbs != null) {
            apiUrlBuilder.append("&thumbs=").append(thumbs);
        }

        // Make request to NASA API
        RestTemplate restTemplate = new RestTemplate();
        Object response = restTemplate.getForObject(apiUrlBuilder.toString(), Object.class);

        return ResponseEntity.ok(response);
    }
}
