package com.sprangular.server.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FrontEndController {
    
    @RequestMapping({"/**/{path:[^.]*}"})
    public String ngRedirect() {
        return "forward:/";
    }
    
}
