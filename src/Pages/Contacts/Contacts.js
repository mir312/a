import './Contacts.css';

function Contacts() {
  return (
<section class="contacts">
		<div class="container">
			<h2 class="page_tit">Book A Table</h2>
			<p class="page_desc">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
		<form action="" class="form form_book">
         <div class="form_in flex">
			<div class="form_input">
				<span class="form_tit">Date</span>
				<input type="text" class="input input_txt" placeholder="04/01/2021"/>
			</div>
			<div class="form_input">
				<span class="form_tit">Time</span>
				<input type="text" class="input input_txt" placeholder="06:30 PM"/>
			</div>
			<div class="form_input">
				<span class="form_tit">Name</span>
				<input type="text" class="input input_txt" placeholder="Enter your name"/>
			</div>
			<div class="form_input">
				<span class="form_tit">Phone</span>
				<input type="text" class="input input_txt" placeholder="x-xxx-xxx-xxxx"/>
			</div>
			<div class="form_input form_input_big">
				<span class="form_tit">Total Person</span>
				<input type="text" class="input input_txt" placeholder="1 Person"/>
			</div>
			

			<div class="form_btn">
				<button class="btn btn_red" type="submit">Book A Table</button>
			</div>
		 </div>

		</form>
		</div>
       <div class="map">
		<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad5a7c4015459fbbd3ccfbc4ce02fea4007a57b71f906ad5e6ea04b38caa25dff&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>

	   </div>
	</section>
  );
}

export default Contacts;