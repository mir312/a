import './Contacts.css';

function Contacts() {
  return (
<section className="contacts">
		<div className="container">
		
		<form action="" className="form form_book flex">
         <div className="form_in flex">
			<div className="form_input">
				<span className="form_tit">Date</span>
				<input type="text" className="input input_txt" placeholder="04/01/2021"/>
			</div>
			<div className="form_input">
				<span className="form_tit">Time</span>
				<input type="text" className="input input_txt" placeholder="06:30 PM"/>
			</div>
			<div className="form_input">
				<span className="form_tit">Name</span>
				<input type="text" className="input input_txt" placeholder="Enter your name"/>
			</div>
			<div className="form_input">
				<span className="form_tit">Phone</span>
				<input type="text" className="input input_txt" placeholder="x-xxx-xxx-xxxx"/>
			</div>
			<div className="form_input form_input_big">
				<span className="form_tit">Total Person</span>
				<input type="text" className="input input_txt" placeholder="1 Person"/>
			</div>
			

			<div className="form_btn">
				<button className="btn btn_red" type="submit">Enter</button>
			</div>
		 </div>

     <div className="form_contacts flex">
			
		 </div>


		</form>
		</div>
       <div className="map">
		{/* <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad5a7c4015459fbbd3ccfbc4ce02fea4007a57b71f906ad5e6ea04b38caa25dff&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe> */}
  
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A028dcce4280782e701ccf88250efd937fb3b131caccc0fcaf9a5094a129540b5&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
  

	   </div>
	</section>
  );
}

export default Contacts;