function encapsulateCss(template) {
    template = template.split('');
    let result = ''

    while (template.length) {
        let start = template.join('').indexOf('class=\\"'), end;
        if (~start) {
            result += template.splice(0, start + 8).join('')
            end = template.join('').search('\"')
            let classes = template.splice(0, end - 1).join('');
            classes = classes.split(' ');
            result += classes.map(function(cls){
                return '__sailplay-' + cls
            }).join(' ')
        }
        else result += template.splice(0).join('')
    }

    return result;
}

module.exports = function(source) {
  return encapsulateCss(source);
};