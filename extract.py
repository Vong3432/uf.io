from bs4 import BeautifulSoup
import codecs
import json
import htmlmin

# url: http://localhost:3000/components/{name}
name = "general"

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

with open('./data/result.json', 'w') as fp:
    json.dump(component_format, fp)
