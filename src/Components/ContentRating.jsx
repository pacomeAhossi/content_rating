
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        handleLike: () => {
            this.setState((prevState) => ({
                likes: prevState.likes + 1
            }));
        },
        
        handleDislike: () => {
            this.setState((prevState) => ({
                dislikes: prevState.dislikes + 1
            }));
        }
        
    };
  }
  render() {
    return (
     <>
        <p>
            Les composants de la classe React ont un cycle de vie, 
            ce qui signifie qu'ils passent par trois phases au cours 
            de leur durée de vie. À chaque phase, React fournit des 
            méthodes de cycle de vie auxquelles vous pouvez accéder. 
            Le cycle de vie d'un composant comporte trois phases 
            principales. Ces phases incluent le montage, la mise à 
            jour et le démontage. Lors de la phase de montage, vous 
            instanciez l'objet à l'aide du constructeur de classe de 
            composants et vous lui attribuez un état par défaut. 
            Au cours de la phase de mise à jour, l'état et les 
            accessoires d' un composant changent en raison 
            d'événements utilisateur. Des modifications peuvent 
            également se produire au sein du composant en raison 
            d'une modification du back-end. Le composant effectue 
            un nouveau rendu au cours de cette phase. Enfin, il y a 
            le démontage. Comme son nom l'indique, le composant est 
            supprimé de la page. Le cycle de vie du composant fait 
            référence à la relation du composant avec le DOM. 
            Le cycle de vie des composants commence lorsque les 
            composants sont créés et montés sur le DOM. Une fois 
            monté, React met à jour le DOM en fonction de la logique 
            du composant. Ensuite, les composants meurent lorsque le 
            système les démonte du DOM. React appelle automatiquement 
            la méthode responsable en fonction de sa phase. Bien que 
            React invoque automatiquement ces méthodes, vous pouvez 
            les manipuler pour mieux contrôler le comportement des 
            composants. Deux des méthodes utilisées lors du montage 
            des composants incluent componentWillMount et 
            componentDidMount. La méthode de rendu est également 
            appelée pour la première fois. Le système invoque la 
            méthode ComponentWillMount avant la première exécution 
            de la fonction de rendu. Le système invoque la méthode 
            componentDidMount juste après la première exécution de la 
            fonction de rendu.
        </p>
        <div className="content-rating">    
            <div className="rating-buttons">
                <button className='like-button' onClick={this.state.handleLike} >Like ({this.state.likes}) </button>
                <button className='dislike-button' onClick={this.state.handleDislike}>Dislike ({this.state.dislikes}) </button>
            </div> 
        </div>
     </>
    );
  }
}

export default ContentRating;
