import axios from "axios";
import React from "react";
import { ClassNavBar } from "../controlled-components/class-nav-bar";


export class ClassDataBinding extends React.Component
{
      constructor(){
         super();
         this.state = {
              categories : [],
              products : []
         }
         this.handleCategoryChange = this.handleCategoryChange.bind(this);
      }

      LoadCategories(){
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response=> {
             response.data.unshift("all");
             this.setState({categories: response.data});
        })
      }

      LoadProducts(url){
         axios.get(url)
         .then(response=>{
             this.setState({products: response.data})
         })
      }

      componentDidMount(){
          this.LoadCategories();
          this.LoadProducts(`https://fakestoreapi.com/products`);  
      }

      handleCategoryChange(e){
          if(e.target.value==="all"){
            this.LoadProducts(`https://fakestoreapi.com/products`);  
          } else {
            this.LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);  
          }
      }


      render(){
         return(
            <div className="container-fluid">
                <header className="bg-dark text-center  text-white p-2">
                    <ClassNavBar title={'Shopper.'} menuItems={['Home', 'Shop', 'Blog', 'Pages']} />
                </header>
                <section className="row">
                    <nav className="col-2">
                        <label className="fw-bold form-label">Select Category</label>
                        <div>
                            <select onChange={this.handleCategoryChange} className="form-select">
                                {
                                    this.state.categories.map(category=><option value={category} key={category}>{category.toUpperCase()}</option>)
                                }
                            </select>
                        </div>
                    </nav>
                    <main className="col-10 d-flex flex-wrap overflow-auto" style={{height:'500px'}}>
                        {
                            this.state.products.map(product=>
                                <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}>
                                    <img height="100" className="card-img-top" src={product.image} />
                                </div>
                            )
                        }
                    </main>
                </section>
            </div>
         )
      }
}