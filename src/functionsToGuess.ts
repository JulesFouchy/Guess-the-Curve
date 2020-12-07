import { FuncToGuess } from './types/FuncToGuess'

const f: FuncToGuess[] = [
    {value: 'x', explanation: "On voit que c'est une droite ; elle a une pente de 1 et passe par l'origine, donc c'est x"},
    {value: '2x', explanation: "On voit que c'est une droite ; elle a une pente de 2 et passe par l'origine, donc c'est 2x"},
    {value: '-x-1', explanation: "On voit que c'est une droite ; elle a une pente de -1 et passe par -1 en 0, donc c'est -x - 1"},
    {value: 'x^2', explanation: "Ça ressemble vachement à une parabole ! (C'est-à-dire la famille des ax^2 + bx + c) On peut vérifier quelques valeurs (f(0) = 0, f(2) = 4) pour se convaincre que c'est bien x^2 tout court."},
    {value: '(x-2)^2+3', explanation: "Ça ressemble vachement à une parabole ! (C'est-à-dire la famille des ax^2 + bx + c) On voit que, contrairement à x^2 qui a son sommet en (0, 0), celle-ci à son sommet en (2, 3). Il faut donc translater de 2 en x et de 3 en y, ce qui nous donne (x-2)^2+3"},
    {value: 'x^4', explanation: "Ça ressemble pas mal à x^2, mais un œil expert remarquera que c'est beaucoup plus applati au niveau de 0. Ça semble donc plutôt être x^4"},
    {value: 'x^3', explanation: "C'est l'inimitable x^3"},
    {value: 'x^5', explanation: "x^3 mais plus plat au niveau de 0, ça doit être x^5 ! (okay la différence n'est pas manifeste j'admet)"},
    {value: 'sqrt(x)', explanation: "C'est l'inimitable sqrt(x) (racine carrée)"},
    {value: 'ln(x)', explanation: "C'est l'inimitable ln(x)"},
    {value: 'exp(x)', explanation: "C'est l'inimitable exp(x)"},
    {value: '1/x', explanation: "C'est l'inimitable 1/x"},
    {value: 'abs(x)', explanation: "C'est l'inimitable abs(x) (valeur absolue)"},
    {value: 'sin(x)', explanation: "C'est l'inimitable sin(x). Il se différencie de cos(x) par le fait qu'il vaut 0 en 0."},
    {value: 'cos(x)', explanation: "C'est l'inimitable cos(x). Il se différencie de sin(x) par le fait qu'il vaut 1 en 0."},
    {value: 'cos(x+pi/2)', explanation: "C'est carrément un cos (ou un sin) mais décalé d'un manière dont on a pas l'habitude. Par exemple comparé à cos, il est décalé de pi/2 vers la gauche, donc c'est cos(x+pi/2)"},
    {value: 'atan(x)', explanation: "La légendaire atan(x) (arc tangente)"},
    {value: 'tan(x)', explanation: "La légendaire tan(x)"},
    {value: 'x*sin(x)', xDomain: [-40, 40], yDomain: [-40, 40], explanation: "On voit que ça oscille comme un cos ou sin, mais l'amplitude est bornée par les droites x et -x, donc ça doit être x*cos(x) ou x*sin(x). On peut trancher sans même tester en remarquant que la fonction est paire : c'est donc x*sin(x) (impair * impair = pair)"},
    {value: 'cos(x)+cos(10*x)', explanation: "On dirait globalement un cos, mais il y a aussi des oscillations très rapides autour de ce cos. C'est qu'on a dû lui rajouter un autre cosinus à une fréquence plus élevée. En l'occurence c'est cos(x) + cos(10*x)"},
    {value: 'exp(-x*x)', explanation: "La légendaire gaussienne exp(-x^2). Le -x^2 fait en sorte que l'argument est toujours négatif, et on sait qu'une exponentielle tend très vite vers 0 quand son argument tend vers -∞"},
]

export default f