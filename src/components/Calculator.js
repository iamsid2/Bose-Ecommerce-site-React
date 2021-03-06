import React, { Component } from "react";

class Calc extends Component {

        constructor(props){
           super(props);
           this.state = {
             newProject:{}
           }
         }
       static defaultProps = {
      categories: ['India','U.K','U.S.A']
    }

            handleSubmit(e){
              if(this.refs.title.value === ''){
              alert('No. of Unit is required');
              } else {
              this.setState({newProject:{
                title: this.refs.title.value,
                category: this.refs.category.value
              }}, function(){
                this.props.addProject(this.state.newProject);
              });
              }
        e.preventDefault();
        }
      importFees()
      {
          var c = this.refs.category.value
        if(c =="India")
          return 50.00;
        else if(c=="U.K")
           return 30.00;
        else {
          return 0.00;
        }
      }

      discountFees()
      {
            var g = this.refs.category.value
        if(g=="India")
          return 100.00;
        else if(g=="U.K")
           return 75.00;
        else {
          return 20.00;
        }
      }
      totalCost()
      {
          var a = this.discountFees.value
          var b = this.importFees.value
        return 1000 + a + b;
      }


	render() {
      let categoryOptions = this.props.categories.map(category => {
        return <option key={category} values="category">{category}</option>
      });

		return (
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
          <img
            src="../img/3.jpg"

            alt="Calculator"
            height="400"
            width="600"
          />
          </li>
          </ul>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
          <label>Total no. of Units: </label>
          <input type="text" ref="title" />
          </li>
          <li className="nav-item active">
          <label>Set your Region: </label>
            <select ref = "category">
            {categoryOptions}
            </select>
          </li>
            <li className="nav-item active">
            <strong>Import fees from U.S : </strong>
            <text><b>{this.importFees}</b></text>
            </li>
            <li className="nav-item active">
            <strong>Discount : </strong>
            <text>{this.discountFees}</text>
            </li>
            <li className="nav-item active">
            <strong>NET COST $: </strong>
            <text>{this.totalCost}</text>
            </li>
            </ul>
            <br/>
          <input type="submit" className= "btn btn-info" value="BUY" />
          <input type="submit" className= "btn btn-danger" value="CLEAR" />
          <br />
          </form>


      </div>
      )
	}
}



export default Calc;
