---
layout: page
title: About
permalink: /about/
---

I am a postgraduate student looking for a career change in web development.


### Contact me
<div class="panel panel-default">
  <div class="panel-body">
  	<div id="formAlert" class="alert alert-dismissible hidden" role="alert">
  		<button type="button" class="close" data-hide="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
  		<span></span>
	</div>
	<form role="form" id="contactForm" class="form-horizontal" method="post"> 
	  <input type='hidden' name='redirect_to' value='http://localhost:4000/thank-you.md' />
	  <div class="form-group">
	  	<label for='name' class="col-sm-2 control-label">Name</label>
	  	<div class="col-sm-6">
	  		<input type='text' id='name' class="form-control input-sm" name='name' placeholder="Name"/>
		</div>
	  </div>
	  <div class="form-group">
	  	<label for='email' class="col-sm-2 control-label">Email</label>
	  	<div class="col-sm-6">
	  		<input type='email' id='email' class="form-control input-sm" name='email' placeholder="Email"/>
		</div>
	  </div>
	  <div class="form-group">
	  	<label for='subject' class="col-sm-2 control-label">Subject</label>
	  	<div class="col-sm-10">
	  		<input type='text' id='subject' class="form-control input-sm" name='subject' placeholder="Subject"/>
		</div>
	  </div>
	  <div class="form-group">
	  	<label for='message' class="col-sm-2 control-label">Message</label>
	  	<div class="col-sm-10">
	  		<textarea id='message' class="form-control" name='message' placeholder="Message content" rows="5" style="resize: vertical"></textarea>
		</div>
	  </div>
	  <button type='submit' id="sendForm" class="btn btn-default center-block" data-sending-text="Sending...">Send</button>
	</form>
  </div>
</div>

<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.3/css/bootstrapValidator.min.css"/>
<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.3/js/bootstrapValidator.min.js"></script>
<script type="text/javascript" src="/scripts/about.js"></script>
