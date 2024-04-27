package com.madhav.Webg;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class view {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/home")
    public String Home() {
        return "index";
    }

    @GetMapping("/main")
    public String Main() {
        return "index";
    }

}
