import Handlebars from 'handlebars';
import { markupTemp } from 'bundle-text:../template/errorCountriesTemp.hbs';
const madeMarkup = Handlebars.compile(markupTemp)

console.log(madeMarkup)