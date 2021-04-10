import _ from 'lodash';
import './style.css';
import orcas from '../src/orcas.jpeg'

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // const orcaPic = new Image()
    // orcaPic.src = orcas;
    // element.appendChild(orcaPic)
    return element
}

document.body.appendChild(component())