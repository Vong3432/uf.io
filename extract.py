from bs4 import BeautifulSoup
import codecs
import json
import htmlmin


def create_new_component_template(name):
    return {
        'source': name,
        'components': []
    }

def generate(name, source):    

    f = codecs.open(f"./sources/cards/{name}.js", 'r')

    html_code = f.read()

    soup = BeautifulSoup(html_code,'html.parser')
    body = soup.find('body')
    css = soup.find('style',{"type" : "text/css"})
    js = soup.find('script')

    component_format = {
        'name': f'{name}',      # component name
        'html': str(body),      # body block
        'css': str(css),        # css block
        'js': str(js)           # js block
    }

    with open('./data/result.json') as fp:        
        if(fp): 
            data = json.load(fp)

            for i in range(len(data)):
                
                if(data[i]['source'] == source):
                    matched_data = data[i]
                    temp = matched_data['components']
                    
                    temp.append(component_format)
                    with open('./data/result.json', 'w') as f:
                        if(f):
                            json.dump(data, f)  
                            return True              

            print("No matching source")
            return False
                

# url: http://localhost:3000/components/{name}

print('Enter source: ')
source = input() 

if(source != None or source != ""):

    # type new-{SOURCE} to create new source
    if(source.upper().rfind("NEW-") != -1):                
        source = source.replace('new-','')
        new_comp = create_new_component_template(source)        
        
        with open('./data/result.json') as fp:        
            if(fp): 
                data = json.load(fp)
                is_exist = False
                
                for i in range(len(data)):                                    
                    # check if new source already exist
                    if(data[i]['source'] == source):
                        is_exist = True
                
                # new source is not exist
                if(is_exist == False):

                    # create new source                                                 
                    data.append(new_comp)

                    with open('./data/result.json', 'w') as f:
                        if(f):
                            json.dump(data, f)  

                else: 
                    print(f"Source{source} is already existed, proceed ...")                      

    while(True):    

        print('Enter name: ')
        name = input()
        
        if(name == None or name == ""):
            break
        
        result = generate(name, source)            

        if(result == False):
            break

