<?php

?> 
<div id="submit_form" class="submit_form">
<a class="editClose_btn" id="closeB" href="#close">×</a>
<form action="" id="ikr_map_form">

<input type="hidden" name="mapHiddenId" id="maphiddenId_add">

<div class="align_inp" >
<label for="lat">Latitude</label>
<input   placeholder="lat"   id="latituide" name="lat" type="text" id="lat" >

</div>

<div class="align_inp" >
<label for="lng">lngitude</label>
<input placeholder="lng"    id="langtuide" name="lng" type="text" id="lat" >

</div>
<div class="align_inp" >
<label for="address"> Address</label>
<input type="text" name="address" placeholder="Address" id="address">

</div>
<div class="align_inp" >

<label for="phone"> phone</label>
<input type="text" id="phone" placeholder="Your Phone Number" name="phone">

</div>
<div class="align_inp" >
<label for="email"> Email</label>
<input type="email" id="email" name="email"placeholder="Enter Your Email Here" value=" ">
</div>

<div class="align_inp" >
<label for="url"> Website URL</label>
<input type="text" name="url" placeholder="Your Site URL" id="input_url">
</div>


<div class="align_inp" >
<input type="submit" value="Add New"/>
</div>




</form>


<form id="deletemarker_form" action=""> 
<input id="marker_id" type="hidden" name="markerID">
</form>
</div>
<?php


?>