/*
Component - Logic for Rating 
- rendered in HomeScreen
- props object with rating & review keys
 */
const Rating = {
	render: (props) => {
		if (!props.rating) {
			return `<div>Be the first to rate</div>`;
		}
		return `
      <div>
        <span>
          <i class="${
            props.rating >= 1 
              ? 'fa fa-star' 
              : props.rating >= 0.5 
              ? 'fa fa-star-half-o' 
              : 'fa fa-star-o'}">
          </i>
        </span>
        <span>
          <i class="${
            props.rating >= 2 
              ? 'fa fa-star' 
              : props.rating >= 1.5 
              ? 'fa fa-star-half-o' 
              : 'fa fa-star-o'}">
          </i>
        </span>  
        <span>
          <i class="${
            props.rating >= 3 
              ? 'fa fa-star' 
              : props.rating >= 2.5 
              ? 'fa fa-star-half-o' 
              : 'fa fa-star-o'}">
          </i>
        </span>  
        <span>
          <i class="${
            props.rating >= 4 
              ? 'fa fa-star' 
              : props.rating >= 3.5 
              ? 'fa fa-star-half-o' 
              : 'fa fa-star-o'}">
          </i>
        </span>  
        <span>
          <i class="${
            props.rating >= 5 
              ? 'fa fa-star' 
              : props.rating >= 4.5 
              ? 'fa fa-star-half-o' 
              : 'fa fa-star-o'}">
          </i>
        </span>
        <span>${props.review || ''}</span>
      </div>
    `;
	},
};

export default Rating;
