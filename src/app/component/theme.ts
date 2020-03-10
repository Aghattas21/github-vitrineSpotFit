export interface Theme {
    name: string;
    properties: any;
  }
  
  export const light: Theme = {
    name: "light",
    properties: {        

      "--paragraphe-default": "#8c8fa9",

      "--title-default": "#373956",

      "--background-defaut": "#ffffff",  
      
      "--background-blck" : "#ffffff",

      "--background-blck-p" : "#f8f7fb", 
      
      "--image-default" : "block" ,
    
      "--image-dark" : "none" ,  
      
      "--svg-md" : "#373956" ,
      
      "--shadow-mod" : "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)" ,
      
      "--lg-txt" : "#000000",

      "--svg-user" : "#5d3c9c" ,

      "--image-menu" : "url(../../../assets/Menu/icon-hmb.png)" ,

      "--image-close-menu" : "url(../../../assets/Menu/icn-r-mn.png)",

      "--text-pilier" : "#373956" ,

      "--menu-link-clr" : "#373956" ,

      "--bg-menu" : "#f9f9f9fa" ,

      "--white-01" : "#5A5975" ,
      
      "--gray-01" : "#dbdbe2" ,

      "--background-image" : "linear-gradient(90deg, #ffffff 0%, #d1d3db 53%, #ffffff 100%)",

      "--gray-02" : "#6b6d88",

      "--gray-03" : "#9395a9",

      "--black-01" :"#2E8B57",

      "--border-indicator" :"#eeecf4",

      "--back-indicator" :"#fff",

      "--gray-04" : "#f0eef6",

      "--gray-05" : "#b9b6c2",

      "--white" : "#fff",

      "--purple-01" : "#321366",

      "--gray-06" : "#C9C4DB"
    }
  };
  
  export const dark: Theme = {
    name: "dark",
    properties: {      

        "--title-default" : "#ffffff",
        
        "--paragraphe-default": "#8c8fa9",
        
        "--background-defaut" : "#171e2e",

        "--background-blck" : "#20293e",

        "--background-blck-p" : "#20293e",

        "--image-default" : "none" ,
    
        "--image-dark" : "block" ,

        "--svg-md" : "#686a87" ,

        "--shadow-mod" : "0 0.125rem 0.25rem #5b3596e8" ,
        
        "--lg-txt" : "#ffffff",

        "--svg-user" : "#ffffff" ,

        "--image-menu" : "url(../../../assets/Menu/icon-hmb-drk.png)" ,

        "--image-close-menu" : "url(../../../assets/Menu/icn-r-mn-drk.png)",

        "--text-pilier" : "#373956" ,

        "--menu-link-clr" : "#ffffff" ,

        "--bg-menu" : "#20293e" ,

        "--white-01" : "#B2B1C9" ,

        "--gray-01" : "#262C3F" ,

        "--background-image" : "linear-gradient(90deg, #171d2d 0%, #4c5770 53%, #171d2d 100%)",

        "--gray-02" : "#6b6d88",

        "--gray-03" : "#9395a9",

        "--black-01" :"#283249",

        "--border-indicator" :"#3a445b",

        "--back-indicator" :"#3f4457",

        "--gray-04" : "#20293e",

        "--gray-05" : "#b9b6c2",

        "--white" : "#fff",

        "--purple-01" : "#321366",

        "--gray-06" : "#C9C4DB"

        
        
    }
  };