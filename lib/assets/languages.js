var codegenList = [
  {
    'type': 'code_generator',
    'lang': 'csharp',
    'variant': 'HttpClient',
    'syntax_mode': 'csharp',
    'author': 'Postman Labs <help@getpostman.com>',
    'homepage': 'https://github.com/postmanlabs/code-generators/tree/master/codegens/csharp-httpclient',
    'main': require('../../codegens/csharp-httpclient/index.js')
  },
  {
    'type': 'code_generator',
    'lang': 'csharp',
    'variant': 'RestSharp',
    'syntax_mode': 'csharp',
    'author': 'Postman Labs <help@getpostman.com>',
    'homepage': '',
    'main': require('../../codegens/csharp-restsharp/index.js')
  },
  {
    'type': 'code_generator',
    'lang': 'curl',
    'variant': 'cURL',
    'syntax_mode': 'powershell',
    'author': 'Postman Labs <help@getpostman.com>',
    'homepage': 'https://github.com/postmanlabs/code-generators/tree/master/codegens/curl',
    'main': require('../../codegens/curl/index.js')
  },
  {
    'type': 'code_generator',
    'lang': 'go',
    'variant': 'Native',
    'syntax_mode': 'golang',
    'author': 'Postman Labs <help@getpostman.com>',
    'homepage': 'https://github.com/postmanlabs/code-generators/tree/master/codegens/golang',
    'main': require('../../codegens/golang/index.js')
  },
  {
    'type': 'code_generator',
    'lang': 'java',
    'variant': 'OkHttp',
    'syntax_mode': 'java',
    'author': 'Postman Labs <help@getpostman.com>',
    'homepage': 'https://github.com/postmanlabs/code-generators/tree/master/codegens/java-okhttp',
    'main': require('../../codegens/java-okhttp/index.js')
  },
  {
    'type': 'code_generator',
    'lang': 'java',
    'variant': 'Unirest',
    'syntax_mode': 'java',
    'author': 'Postman Labs <help@getpostman.com>',
    'homepage': 'https://github.com/postmanlabs/code-generators/tree/master/codegens/java-unirest',
    'main': require('../../codegens/java-unirest/index.js')
  },
  {
    'type': 'code_generator',
    'lang': 'JavaScript',
    'variant': 'Fetch',
    'syntax_mode': 'javascript',
    'author': 'Postman Labs <help@getpostman.com>',
    'homepage': 'https://github.com/postmanlabs/code-generators/tree/master/codegens/js-fetch',
    'main': require('../../codegens/js-fetch/index.js')
  },
  {
    'type': 'code_generator',
    'lang': 'nodejs',
    'variant': 'Axios',
    'syntax_mode': 'javascript',
    'author': 'Postman Labs <help@getpostman.com>',
    'homepage': 'https://github.com/postmanlabs/code-generators/tree/master/codegens/nodejs-axios',
    'main': require('../../codegens/nodejs-axios/index.js')
  },
  {
    'type': 'code_generator',
    'lang': 'nodejs',
    'variant': 'Native',
    'syntax_mode': 'javascript',
    'author': 'Postman Labs <help@getpostman.com>',
    'homepage': 'https://github.com/postmanlabs/code-generators/tree/master/codegens/nodejs-native',
    'main': require('../../codegens/nodejs-native/index.js')
  },
  {
    'type': 'code_generator',
    'lang': 'nodejs',
    'variant': 'Request',
    'syntax_mode': 'javascript',
    'author': 'Postman Labs <help@getpostman.com>',
    'homepage': 'https://github.com/postmanlabs/code-generators/tree/master/codegens/nodejs-request',
    'main': require('../../codegens/nodejs-request/index.js')
  },
  {
    'type': 'code_generator',
    'lang': 'nodejs',
    'variant': 'Unirest',
    'syntax_mode': 'javascript',
    'author': 'Postman Labs <help@getpostman.com>',
    'homepage': 'https://bitbucket.org/postmanlabs/codegen-nodejs-unirest#readme',
    'main': require('../../codegens/nodejs-unirest/index.js')
  },
  {
    'type': 'code_generator',
    'lang': 'php',
    'variant': 'cURL',
    'syntax_mode': 'php',
    'author': 'Postman Labs <help@getpostman.com>',
    'homepage': 'https://github.com/postmanlabs/code-generators/tree/master/codegens/php-curl',
    'main': require('../../codegens/php-curl/index.js')
  },
  {
    'type': 'code_generator',
    'lang': 'php',
    'variant': 'Guzzle',
    'syntax_mode': 'php',
    'author': 'Postman Labs <help@getpostman.com>',
    'homepage': 'https://github.com/postmanlabs/code-generators/tree/master/codegens/php-guzzle',
    'main': require('../../codegens/php-guzzle/index.js')
  },
  {
    'type': 'code_generator',
    'lang': 'php',
    'variant': 'HTTP_Request2',
    'syntax_mode': 'php',
    'author': 'Postman Labs <help@getpostman.com>',
    'homepage': 'https://github.com/postmanlabs/code-generators/tree/master/codegens/php-httprequest2',
    'main': require('../../codegens/php-httprequest2/index.js')
  },
  {
    'type': 'code_generator',
    'lang': 'php',
    'variant': 'pecl_http',
    'syntax_mode': 'php',
    'author': 'Postman Labs <help@getpostman.com>',
    'homepage': 'https://github.com/postmanlabs/code-generators/tree/master/codegens/php-pecl-http',
    'main': require('../../codegens/php-pecl-http/index.js')
  },
  {
    'type': 'code_generator',
    'lang': 'powershell',
    'variant': 'RestMethod',
    'syntax_mode': 'powershell',
    'author': 'Postman Labs <help@getpostman.com>',
    'homepage': 'https://github.com/postmanlabs/code-generators/tree/master/codegens/powershell-restmethod',
    'main': require('../../codegens/powershell-restmethod/index.js')
  },
  {
    'type': 'code_generator',
    'lang': 'python',
    'variant': 'http.client',
    'syntax_mode': 'python',
    'author': 'Postman Labs <help@getpostman.com>',
    'homepage': 'https://github.com/postmanlabs/code-generators/tree/master/codegens/python-http.client',
    'main': require('../../codegens/python-http.client/index.js')
  },
  {
    'type': 'code_generator',
    'lang': 'python',
    'variant': 'Requests',
    'syntax_mode': 'python',
    'author': 'Postman Labs <help@getpostman.com>',
    'homepage': 'https://github.com/postmanlabs/code-generators/tree/master/codegens/python-requests',
    'main': require('../../codegens/python-requests/index.js')
  },
  {
    'type': 'code_generator',
    'lang': 'Ruby',
    'variant': 'Net::HTTP',
    'syntax_mode': 'ruby',
    'author': 'Postman Labs <help@getpostman.com>',
    'homepage': 'https://github.com/postmanlabs/code-generators/tree/master/codegens/ruby',
    'main': require('../../codegens/ruby/index.js')
  }
];
module.exports = codegenList;
