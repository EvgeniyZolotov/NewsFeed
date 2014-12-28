FeedApp.factory('NewsControllerFct', [function () {
	this.news = [];
	this.news.news_list = function () {
		return [
			{
				title: "1",
				author: "Superman",
				time: "1",
				image: "resources/1.jpg",
				video: "",
				body: "<p>&emsp;You're probably now asking yourself, \"Sure, that looks cool, but where does Items come from?\" The preceding code assumes that we've defined Items as a service. " +
						"Services are singleton (single-instance) objects that carry out the tasks necessary to support your applications functionality. Angular comes with many services " +
						"like $location, for interacting with the browser's location, $route, for switching views based on location (URL) changes, and $http, for communicating with servers.<br />" +
						"<p>&emsp;You can, and should, create your own services to do all of the tasks unique to your application. Services can be shared across any controllers that need them. " +
						"As such, they're a good mechanism to use when you need to communicate across controllers and share state. Angular's bundled services start with a $, so while you can " +
						"name them anything you like, its a good idea to avoid starting them with $ to avoid naming collisions.<br />" +
						"&emsp;You define services with the module object's API. There are three functions for creating generic services, with different levels of complexity and ability:<br />"+
						"&emsp;While this would certainly work, it has a number of potential problems.<br />" +
						"&emsp;If some other controller also needs to get Items from the server, we now have to replicate this code. This makes maintenance a burden, as now if we make schema" +
						"or other changes, we have to update that code in several places.<br />" +
						"&emsp;With other factors like server authentication, parsing complexity, and so on, it is difficult to reason about the boundaries of responsibility for this controller " +
						"object, and reading the code is harder.<br />" +
						"&emsp;To unit test this bit of code, we'd either need to actually have a server running, or monkey patch XMLHttpRequest to return mock data. Having to run the server " +
						"will make tests very slow, it's a pain to set up, and it usually introduces flakiness into tests. The monkey patching route solves the speed and flakiness problems, " +
						"but it	means you have to remember to un-patch any patched objects between tests, and it brings additional complexity and brittleness by forcing you to specify the " +
						"exact on-the-wire format for your data (and in having to update the tests whenever this format changes).<br />" +
						"&emsp;With modules, and the dependency injection we get from them, we can write our controller much more simply, like this:<br />"
			},
			{
				title: "2",
				author: "Hobbit",
				time: "2",
				image: "../resources/2.jpg",
				video: "../resources/sd.mp4",
				body: "<h5>Browser Support for Frames</h5>" +
						"<p>&emsp;Just as certain types of television sets are capable of displaying picture-in-picture, certain" + 
						"browsers can handle frames. Netscape 2.0 was the first to introduce and support frames," + 
						"but Microsoft quickly added support in its Internet Explorer 3.0 browser. But frames didn’t" + 
						"become an official part of the W3C’s HTML specifications until version 4.0, which meant not" + 
						"many other browsers supported frames at first. However, all current browsers not only support" + 
						"standard frames, but floating inline frames as well.<br />" + 
						"&emsp;The major exception to this is browsers for handheld PDAs and web-enabled phones." + 
						"These types of browsers have difficulty displaying frames-based sites, as well as any other site" + 
						"that relies on the display of lots of information at once. So if you do use frames on your site," + 
						"you should still provide alternative versions of your web site for those people visiting with a" + 
						"non-frames-capable browser. You’ll learn how to do that at the end of this chapter.<p>" +
						"<p>&emsp;<b>Q: Before we start… I heard frames are no longer used by <e>professional</e> web designers. Is" + 
						"this true? If so, why do you include them in this book?</b><br />" + 
						"&emsp;<b>A:</b> I guess there’s really no way to beat around this bush . . . yes, it’s true. Frames have always" + 
						"received mixed reviews in the web community. And now that you can achieve the same" + 
						"results by separating content into divs and then formatting them with style sheets, the" + 
						"majority of web developers steer away from frames.<br />" + 
						"&emsp;Even though frames are still supported by browsers, they can be difficult to style." + 
						"This is because there’s no “legal” or official way to turn off all of the frame borders . . ." + 
						"something most designers want to do to achieve that seamless look.<br />" + 
						"&emsp;While revising this book for its third edition, I decided to leave a somewhat scaleddown" + 
						"discussion on frames in the book for those who have a real need for true frames. At" + 
						"that time, I wondered if the W3C would drop support of frames altogether.<br />" + 
						"&emsp;Now, as I’m writing the fourth edition, I can tell you that the W3C has not dropped" + 
						"support of frames, but instead has given them their own spec (called XFRAMES) that now" + 
						"lives under the XML heading. I see no reason why frames can’t be used for sites in which" + 
						"CSS either doesn’t make sense or isn’t a viable way to achieve the desired results. In fact," + 
						"while researching for this edition, I found a large number of sites that continue to use inline" + 
						"frames (which you’ll read about shortly) for most of their advertisements.<br />" + 
						"&emsp;Having said that, keep in mind that frames may cause some trouble for users who wish to" + 
						"bookmark your site, and also for those entering your site through a search engine (they may" + 
						"not see all the “frames” if they come to a single page from a search engine). I encourage you" + 
						"to review this chapter’s information, as well as alternative methods (such as those discussed in" + 
						"Chapter 12), to determine the best solution for your particular needs.<br />" + 
						"&emsp;Finally, if you find yourself maintaining an older web site that uses frames, I hope my" + 
						"inclusion of this section helps you keep your frames-based content fresh.</p>"
			},
			{
				title: "3",
				author: "Oppenheimer",
				time: "3",
				image: "../resources/3.jpg",
				video: "../resources/boom.mp4",
				//video:"",
				//video: "../resources/jj.flv",
				body: "<p>&emsp;A program is many things. It is a piece of text typed by a programmer," + 
						"it is the directing force that makes the computer do what it does, it is" + 
						"data in the computer’s memory, yet it controls the actions performed on" + 
						"this same memory. Analogies that try to compare programs to objects" + 
						"we are familiar with tend to fall short. A superficially fitting one is that" + 
						"of a machine—lots of separate parts tend to be involved, and to make" + 
						"the whole thing tick, we have to consider the ways in which these parts" + 
						"interconnect and contribute to the operation of the whole.<br />" + 
						"&emsp;A computer is a machine built to act as a host for these immaterial" + 
						"machines. Computers themselves can do only stupidly straightforward" + 
						"things. The reason they are so useful is that they do these things at" + 
						"an incredibly high speed. A program can ingeniously combine enormous" + 
						"numbers of these simple actions in order to do very complicated things.<br />" + 
						"&emsp;To some of us, writing computer programs is a fascinating game. A" + 
						"program is a building of thought. It is costless to build, it is weightless," + 
						"and it grows easily under our typing hands.<br />" + 
						"&emsp;But without care, a program’s size and complexity will grow out of" + 
						"control, confusing even the person who created it. Keeping programs" + 
						"under control is the main problem of programming. When a program" + 
						"works, it is beautiful. The art of programming is the skill of controlling" + 
						"complexity. The great program is subdued, made simple in its complexity.<br />" + 
						"&emsp;Many programmers believe that this complexity is best managed by" + 
						"using only a small set of well-understood techniques in their programs." + 
						"They have composed strict rules (“best practices”) prescribing the form" + 
						"programs should have, and the more zealous among them will consider" + 
						"those who go outside of this safe little zone to be bad programmers.<br />" + 
						"&emsp;What hostility to the richness of programming—to try to reduce it" + 
						"to something straightforward and predictable, to place a taboo on all" + 
						"the weird and beautiful programs! The landscape of programming techniques" + 
						"is enormous, fascinating in its diversity, and still largely unexplored." + 
						"It is certainly dangerous going, luring the inexperienced programmer into " + 
						"all kinds of confusion, but that only means you should" + 
						"proceed with caution and keep your wits about you. As you learn, there" + 
						"will always be new challenges and new territory to explore. Programmers" + 
						"who refuse to keep exploring will stagnate, forget their joy, and get" + 
						"bored with their craft.</p>"
			},
			{
				title: "4",
				author: "Big Bang",
				time: "4",
				image: "../resources/4.jpg",
				video: "",
				body: "4"
			},
			{
				title: "5",
				author: "My Cat",
				time: "5",
				image: "../resources/5.jpg",
				video: "",
				body: "5"
			},
			{
				title: "6",
				author: "Superman",
				time: "6",
				image: "resources/1.jpg",
				video: "",
				body: "<p>\&nbsp;You're probably now asking yourself, \"Sure, that looks cool, but where does Items come from?\" The preceding code assumes that we've defined Items as a service. " +
						"Services are singleton (single-instance) objects that carry out the tasks necessary to support your applications functionality. Angular comes with many services " +
						"like $location, for interacting with the browser's location, $route, for switching views based on location (URL) changes, and $http, for communicating with servers.</p>" +
						"<p>You can, and should, create your own services to do all of the tasks unique to your application. Services can be shared across any controllers that need them. " +
						"As such, they're a good mechanism to use when you need to communicate across controllers and share state. Angular's bundled services start with a $, so while you can " +
						"name them anything you like, its a good idea to avoid starting them with $ to avoid naming collisions.</p>" +
						"<p>You define services with the module object's API. There are three functions for creating generic services, with different levels of complexity and ability:</p>"+
						"<p>While this would certainly work, it has a number of potential problems.</p>" +
						"<p>If some other controller also needs to get Items from the server, we now have to replicate this code. This makes maintenance a burden, as now if we make schema" +
						"or other changes, we have to update that code in several places.</p>" +
						"<p>With other factors like server authentication, parsing complexity, and so on, it is difficult to reason about the boundaries of responsibility for this controller " +
						"object, and reading the code is harder.</p>" +
						"<p>To unit test this bit of code, we'd either need to actually have a server running, or monkey patch XMLHttpRequest to return mock data. Having to run the server " +
						"will make tests very slow, it's a pain to set up, and it usually introduces flakiness into tests. The monkey patching route solves the speed and flakiness problems, " +
						"but it	means you have to remember to un-patch any patched objects between tests, and it brings additional complexity and brittleness by forcing you to specify the " +
						"exact on-the-wire format for your data (and in having to update the tests whenever this format changes).</p>" +
						"<p>With modules, and the dependency injection we get from them, we can write our controller much more simply, like this:</p>"
			},
			{
				title: "7",
				author: "Hobbit",
				time: "7",
				image: "../resources/2.jpg",
				video: "",
				body: "7"
			},
			{
				title: "8",
				author: "Oppenheimer",
				time: "8",
				image: "../resources/3.jpg",
				video: "",
				body: "8"
			},
			{
				title: "9",
				author: "Big Bang",
				time: "9",
				image: "../resources/4.jpg",
				video: "",
				body: "9"
			},
			{
				title: "10",
				author: "My Cat",
				time: "10",
				image: "../resources/5.jpg",
				video: "",
				body: "10"
			}];
		};
	return this.news;
}]);