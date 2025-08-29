const sentence = [
        "I am a grown ass adult and I still get nausea when I feel like I'm in trouble. They're gonna send me to the principals office and take away my toys for a week. Can you just fucking kill me instead of making me stew in my fucking anxiety<br/><i>â€” <a href='https://www.tumblr.com/pokeballvictim/781557497418956800' style='font-size: 0.8em'>pokeballvictim</a></i>",
        "Having one-sided beef with one specific character is so funny. Like I can see a million characters who do terrible things and be like â€œwhatever.â€ But then thereâ€™s one specific motherfucker who pissed me off so bad that Iâ€™d run them over at a red light if given the chance. <br/><i>â€” <a href='https://phantomrose96.tumblr.com/post/785706745505906688' style='font-size: 0.8em'>phantomrose96</a></i>",
        "'being obsessed with your ocs is so embarrassing' no it isn't. we're returning to our noble roots of playing dolls. stop self depricating and tell me about your guy.<br/><i>â€” <a href='https://www.tumblr.com/reliquarian/768853194256351232' style='font-size: 0.8em'>reliquarian</a></i>",
        "unfortunately I am a yapper and I am an oversharer i am just not a nonchalant mysterious person<br/><i>â€” <a href='https://www.tumblr.com/bakwaaas/784653778859245568' style='font-size: 0.8em'>bakwaaas</a></i>",
        "being crazy over fictional characters is so funny cuz you'll be fine all day and then you start Thinking and then you can feel yourself transform in real time<br/><i>â€” <a href='https://www.tumblr.com/lvmimis/778773766824247296' style='font-size: 0.8em'>lvmimis</a></i>",
        "might seem like a harmless quirk but once you start typing in exclusively lowercase you can never capitalize anything again outside the designated midsentence Gay Emphasis Zones or anyone following you for longer than a week will think you're about to commit murder<br/><i>â€” <a href='https://www.tumblr.com/bisopod/181325591472' style='font-size: 0.8em'>bisopod</a></i>",
        "what a day!!!!!!!! nothing happened and i was tired<br/><i>â€” <a href='https://sylviegirly.tumblr.com/post/107949319872' style='font-size: 0.8em'>largecoin</a></i>",
        "hate when I wanna talk to a person but I donâ€™t really have anything to say. but I yearn for the connection. canâ€™t just message someone like, hi I have nothing in particular to say but youâ€™re fun and cool and I would like to have a conversation<br/><i>â€” <a href='https://www.tumblr.com/bramble-berries/763913039327199232' style='font-size: 0.8em'>bramble-berries</a></i>",
        "if u are ever scared of yapping about your blorbo or your life or your creative projects on the dash bc u are worried that no one wants to see it. know that I am holding your hand and supporting you. I want to see it. make that shitpost I need to read it posthaste<br/><i>â€” <a href='https://yinyuedijun.tumblr.com/post/772054085890342912' style='font-size: 0.8em'>yinyuedijun</a></i>",
        "blorbo art should take zero effort and time to make. It should just manifest straight out of your mind whenever you want it to<br/><i>â€” <a href='https://thetwilightroadtonightfall.tumblr.com/post/781575863127900160' style='font-size: 0.8em'>thetwilightroadtonightfall</a></i>",
        "sorry i never replied. everyday is blending together and im losing sense of time<br/><i>â€” <a href='https://www.tumblr.com/godofthelairrss/780564313029197824' style='font-size: 0.8em'>godofthelairrss</a></i>",
        "â€œman i am so tiredâ€ stays up for 3 more hours doing absolutely nothing<br/><i>â€” <a href='https://sylviegirly.tumblr.com/post/106024681557' style='font-size: 0.8em'>thebagofholding</a></i>",
        "one of my best skills is being able to tell which download button is the actual download button<br/><i>â€” <a href='https://sylviegirly.tumblr.com/post/106011329887' style='font-size: 0.8em'>fartgallery</a></i>",
        "Iâ€™ve mastered the art of pretending to be tired instead of admitting Iâ€™m sad<br/><i>â€” <a href='https://nerdysarcasm.tumblr.com/post/103775237548' style='font-size: 0.8em'>nerdysarcasm</a></i>",
        "hereâ€™s to the kids that use fictional characters as a way of coping. hereâ€™s to the kids that stay up late crying to their favourite characters. hereâ€™s to the kids that imagine their favourite character by their side when theyâ€™re experiencing bad anxiety in public. hereâ€™s to the kids that need works of fiction to keep on surviving.<br/><i>â€” <a href='https://sylviegirly.tumblr.com/post/104310655597' style='font-size: 0.8em'>arodaryldixon</a></i>",
        "dude god could come down from heaven with a million angels and tell me that gif is pronounced â€œjifâ€ and i still wouldnâ€™t fucking do it<br/><i>â€” <a href='https://sylviegirly.tumblr.com/post/102759006337' style='font-size: 0.8em'>johnkatier</a></i>",
        "ARE YOU READY TO SEE SOME CHARACTERS DRAWN FROM 3/4THS VIEW FACING LEEEFFFTTT [AUDIENCE ROARS]<br/><i>â€” <a href='https://sylviegirly.tumblr.com/post/95745379327' style='font-size: 0.8em'>[nsfw name sowwy]/a></i>",
        "50 shades of dark circles under my eyes<br/><i>â€” <a href='https://sylviegirly.tumblr.com/post/95569538452' style='font-size: 0.8em'>macklemack</a></i>",
        "people who don't experience hyperfixation don't know what it feels like to hyperfixate so much on something that it becomes not only your subject of obsession but also your source of happiness and literally the main reason why you still keep going; literal source of strength and life.<br/><br/>shoutout to my favorite fictional characters, favorite people, favorite ships, favorite movies, favorite tv shows, fanfics and archive of our own <br/><i>â€” <a href='https://www.tumblr.com/001x456/778084143075557376' style='font-size: 0.8em'>001x456</a></i>",
        "ahaha yeah my feelings for that character have totally calmed down [sees picture of them] ahaha never mind. aha. ha. i lied. <i>i fucking lied. i lied so much ahahaha iâ€™m a fucking liar i have no control in my life ahaha help me</i><br/><i>â€” <a href='https://www.tumblr.com/greelin/66636772627' style='font-size: 0.8em'>greelin</a></i>",
        "i struggle between wanting to stay up late and wanting extra hours of sleep<br/><i>â€” <a href='https://www.tumblr.com/vaniccio/50789714025' style='font-size: 0.8em'>vaniccio</a></i>",
        "*likes your personal post that i donâ€™t fully understand or have context for just so you know iâ€™m listening and i care about you*<br/><i>â€” <a href='https://nicollekidman.tumblr.com/post/110421882191' style='font-size: 0.8em'>nicollekidman</a></i>",
        "Sorry for being incapable of answering a question without like 900 'It dependssss' prefaces. Unfortunately too many things depend on too many things<br/><i>â€” <a href='https://www.tumblr.com/bongjoonheaux/743601781950562304' style='font-size: 0.8em'>bongjoonheaux</a></i>",
        "'cozy game' maybe for YOU. I have spreadsheets<br/><i>â€” <a href='https://pancakeke.tumblr.com/post/779132355587850240' style='font-size: 0.8em'>pancakeke</a></i>",
        "my new hobby is saying â€œsorry Iâ€™ve been in a weird place recentlyâ€ like Iâ€™ve ever been in a normal place to begin with <br/><i>â€” <a href='https://www.tumblr.com/prinxessinwonderlxnd/773842357217001472' style='font-size: 0.8em'>prinxessinwonderlxnd</a></i>",
        "so embarrassing to have a favorite character honestly. like yes that's my specialest guy <span style='aria-hidden='true''>ðŸ™„</span> yes i have 200 photos of him saved <span style='aria-hidden='true''>ðŸ˜‘</span> if i don't look at him or hear him talk every 2 minutes i'll start killing the hostages <span style='aria-hidden='true''>ðŸ˜•</span> i think about him every day. because he's my favorite. whatever<br/><i>â€” <a href='https://sylviegirly.tumblr.com/post/782557603776675840' style='font-size: 0.8em'>eastgaysian</a></i>",
        "i hope i am not only a mutual to you but also someone you can point at a fictional character and go 'oh shit that guy on tumblr is super fucking mentally unwell about that one' about<br/><i>â€” <a href='https://www.tumblr.com/adolescenceknight/754619849466118144' style='font-size: 0.8em'>adolescenceknight</a></i>",
        "clocking in for another day at the i dont wanna factory<br/><i>â€” <a href='https://cbc-bb.tumblr.com/post/744838020593827840' style='font-size: 0.8em' target='_blank'>cbc-bb</a></i>",
        "Get up girls we have another day of obsessing over fictional characters to cope with reality ahead of us <br/><i>â€” <a href='https://sylviegirly.tumblr.com/post/775491641278595072' style='font-size: 0.8em'>euphoricfez</a></i>",
        "[about my own oc, who i created] in theory its possible she would say that, but we just dont know for sure<br/><i>â€” <a href='https://earthmoveryuri.tumblr.com/post/775330353635262464' style='font-size: 0.8em'>earthmoveryuri</a></i>",
        "fucking whatever man. [my plumbob changes from green to red instantly]<br/><i>â€” <a href='https://rabbitscreams.tumblr.com/post/773796722000478208' style='font-size: 0.8em'>rabbitscreams</a></i>",
        "No no you don't understand! I <i>want</i> to watch this show/movie, read this book, listen to this podcast, etc.! But I <i>must</i> be in the right mindset and the exact head space to begin, or I just <i>can't</i>!<br/><i>â€” <a href='https://crazycatsiren.tumblr.com/post/702924648274444288' style='font-size: 0.8em'>crazycatsiren</a></i>",
        "wow! that was a fun accidental 2 hour session of video's game. now to go to the kitchen to check on my pet Pot Of Boiling Water...<br/><i>â€” <a href='https://st4rm41d.tumblr.com/post/759360073079373824' style='font-size: 0.8em'>st4rm41d</a></i>",
        "god I would be UNSTOPPABLE if I was capable of consistently initiating tasks. just you wait. you'll be waiting a while but just you wait<br/><i>â€” <a href='https://www.tumblr.com/bookwyrminspiration/741545331079233536' style='font-size: 0.8em'>bookwyrminspiration</a></i>",
        "my OCs are sooo cool you guys don't know what you're missing. if you could see the show i'm watching in my head rn you'd go so crazy i'm telling u<br/><i>â€” <a href='https://www.tumblr.com/dogboygirl/774879317337554944' style='font-size: 0.8em'>dogboygirl</a></i>",
        "I only have 5 hp please be gentle with me<br/><i>â€” <a href='https://sexygaywizard.tumblr.com/post/770969616628547584' style='font-size: 0.8em'>sexygaywizard</a></i>",
        "hyperfixation please stay with me long enough to complete the project. hyperfixation do not fade. hyperfixation finish what you started for the love of god<br/><i>â€” <a href='https://sourdough-seal.tumblr.com/post/770167035926872064' style='font-size: 0.8em'>sourdough-seal</a></i>",
        "I swear to god I am going to (remembers nothing) (stares directly at the fucking<br/><i>â€” <a href='https://footlongdingledong.tumblr.com/post/759469279462703104' style='font-size: 0.8em'>footlongdingledong</a></i>",
        "if you have ocs it is so so so important that you have Barbie Timeâ„¢ (drawing them over and over wearing all sorts of different outfits)<br/><i>â€” <a href='https://sabertoothwalrus.tumblr.com/post/778247723113644032' style='font-size: 0.8em'>sabertoothwalrus</a></i>",
        "the fact that i have to be in the â€œright headspaceâ€ to do even the simplest tasks. absolutely humiliating <br/><i>â€” <a href='https://www.tumblr.com/dumbsuicidalteen/687722284317884416' style='font-size: 0.8em'>dumbsuicidalteen</a></i>",
        "i wish we could have subtitles in real life bc i really canâ€™t hear anything anyone is saying to me<br/><i>â€” <a href='https://lylylylylylylylyly.tumblr.com/post/627989621255634944' style='font-size: 0.8em'>lylylylylylylylyly</a></i>",
        "Oh that two year gap on my resume was when I was the architect of my own hell<br/><i>â€” <a href='https://nerdjpg.com/post/749751284544995328' style='font-size: 0.8em'>nerdjpg</a></i>",
        "me (insane) talking to myself (still insane): youre not insane. and neither am i<br/><i>â€” <a href='https://www.tumblr.com/jesuschristfinalgirl/733303956491665408' style='font-size: 0.8em'>jesuschristfinalgirl</a></i>",
        "stop talking to me I just woke up seven (7) hours ago<br/><i>â€” <a href='https://www.tumblr.com/andreweatspussy111/771865146875379712' style='font-size: 0.8em'>[nsfw username sowwy]</a></i>",
        "people might think creating OC lore involves a lot of thinking & planning, but in my personal experience, OC development is more like a divine vision from a god slamming you over the head with a mallet while ur doing the fuckin dishes or folding laundry<br/><i>â€” <a href='https://retquits.tumblr.com/post/780394196519518208' style='font-size: 0.8em'>retquits</a></i>",
        "everything was better in the early 2000s esp. my extreme ignorance of the world and roller coaster tycoon 2<br/><i>â€” <a href='https://sylviegirly.tumblr.com/post/780472611839885312' style='font-size: 0.8em'>nosdrinker</a></i>"
];

const quotes = [
        {
                quote: "it's so wild to me that you absolutely cannot force a hyperfixation to happen. like you'll watch the most perfectly tailor-made-for-you content that everyone says you'll love and feel absolutely nothing, and then the thing you watch on a whim to fill time will reach through the screen and put its damn fingers in your brain and start rearranging the neurons right in front of you and every single time you're like THIS??? THIS??????? and this happens like every 6-12 months forever",
                author: "skulandcrossbones",
                url: "https://www.tumblr.com/skulandcrossbones/774278189517357056"
        },
        {
                quote: "(crawls on all fours with blood drenched on me) I have to do arts and crafts",
                author: "horrificgoth",
                url: "https://horrificgoth.tumblr.com/post/779211164269920256"
        },
        {
                quote: "'Not everything is about your blorbos' to you maybe. To me every other song and probably that car commercial is about them",
                author: "kanerallels",
                url: "https://kanerallels.tumblr.com/post/701758111930810369"
        },
        {
                quote: "'kill them with kindness' WRONG. GET RECLAIMED BY THE EARTH <span style='aria-hidden='true''>ðŸŒ±ðŸŒºðŸŒ·ðŸŒ¹ðŸŒ²â˜˜ï¸ðŸƒðŸŒ¼ðŸŒ³ðŸŒ±ðŸ€ðŸŒ¿ðŸŒ·ðŸŒ¹ðŸŒ³ðŸŒ²ðŸŒ¿ðŸ€ðŸŒ¿ðŸŒ²ðŸŒ¿â˜˜ï¸ðŸŒ±ðŸŒ¸ðŸŒ¼ðŸŒ²â˜˜ï¸ðŸŒ»ðŸ„ðŸŒ¿ðŸŒ³ðŸ€ðŸ€ðŸŒ±ðŸŒºðŸŒ·ðŸŒ¹ðŸ„ðŸŒ²â˜˜ï¸ðŸƒðŸŒ¼ðŸŒ³ðŸŒ±ðŸ€ðŸŒ¿ðŸŒ·ðŸŒ¹ðŸŒ³ðŸŒ²ðŸŒ¿ðŸ€ðŸŒ¿ðŸª»ðŸŒ²ðŸŒ¿â˜˜ï¸ðŸŒ±ðŸŒ¸ðŸŒ¼ðŸŒ²â˜˜ï¸ðŸŒ»",
                author: "sister-lucifer",
                url: "https://sister-lucifer.tumblr.com/post/737189175582965761"
        },
        {
                quote: "how the fuck am i supposed to act like a normal functional human being when The Character exists",
                author: "yardsards",
                url: "https://yardsards.tumblr.com/post/727929306703134720"
        },
        {
                quote: "forever grateful i was simply too lazy to let the make up industrial complex get its hooks in me. I was just like im not doing all of that. im doing none of that in fact",
                author: "wulfhalls",
                url: "https://wulfhalls.tumblr.com/post/783092871415857152"
        },
        {
                quote: "They should invent a not being exhausted",
                author: "gaaaaaay",
                url: "https://sylviegirly.tumblr.com/post/791229543111409664"
        },
        {
                quote: "unfortunately I am a yapper and I am an oversharer i am just not a nonchalant mysterious person",
                author: "bakwaaas",
                url: "https://bakwaaas.tumblr.com/post/784653778859245568"
        },
        {
                quote: "getting big 45 minute vibes from this 15 minute recipe",
                author: "rapidhighway",
                url: "https://rapidhighway.tumblr.com/post/782784810713219072"
        },
        {
                quote: "me [coming to terms with a truth about myself]:<br/>hm..................................................... unfortunate",
                author: "100493503004422",
                url: "https://100493503004422.tumblr.com/post/650469399177969664/"
        },
        {
                quote: "me writing posts about media no one cares about: and another thing,",
                author: "butchniqabi",
                url: "https://butchniqabi.tumblr.com/post/780409205943336960"
        },
        {
                quote: "born to draw ocs 2 trillion times. forced to not have energy to do so",
                author: "npdkondraki",
                url: "https://npdkondraki.tumblr.com/post/783469090263154688"
        },
        {
                quote: "you have to be around asexual perverts itâ€™s good for your health",
                author: "secretyurigarden",
                url: "https://www.tumblr.com/secretyurigarden/783736757858484224"
        },
        {
                quote: "it's always a damn picture of a deer on here",
                author: "papayajuan2019",
                url: "https://papayajuan2019.tumblr.com/post/780035574488842240"
        },
        {
                quote: "thereâ€™s nothing wrong with me plus i donâ€™t have any wants or needs plus i donâ€™t feel or think at all",
                author: "leofwines",
                url: "https://leofwines.tumblr.com/post/784404840121090048"
        },
        {
                quote: "sorry for being so obsessed with that little man who lives in my head. as if i have any choice",
                author: "retquits",
                url: "https://retquits.tumblr.com/post/777396671347867648"
        },
        {
                quote: "my vocabulary is rapidly dwindling. 'yay' is one of my default responses now",
                author: "angelpuppyfromheaven",
                url: "https://www.tumblr.com/angelpuppyfromheaven/782182678151708672"
        },
        {
                quote: "The little-known 10th circle of hell, known as 'Favorite character is extremely popular but you are also extremely particular and everyone is wrong'.",
                author: "x23innocencelost",
                url: "https://x23innocencelost.tumblr.com/post/783922971720941569"
        },
        {
                quote: "she will NOT be hearing from me tonight #avoidant",
                author: "human-pet-they",
                url: "https://human-pet-they.tumblr.com/post/784093603292217345"
        },
        {
                quote: "ah yes. the classic 'I can't sleep because it will be tomorrow in an instant and tomorrow requires things of me and I Simply Do Not Vibe With That'. so I'll go through said tomorrow on 2 hours of sleep. very smart and once again no lessons will be learned",
                author: "anguishmacgyver",
                url: "https://anguishmacgyver.tumblr.com/post/683189434946060289"
        },
        {
                quote: "think about your blorbos ON THE CLOCK",
                author: "blorbobrain",
                url: "https://www.tumblr.com/blorbobrain/775964211427803136"
        },
        {
                quote: "why cant my support system be my beautiful stable mind and problem solving skills and nothing else",
                author: "3000s",
                url: "https://www.tumblr.com/3000s/715936227540582400"
        },
        {
                quote: "gooodbyee 200 dollars helloo piece of pleastic",
                author: "emetiq",
                url: "https://www.tumblr.com/emetiq/754135509162409984"
        },
        {
                quote: "just wanna find the softest grass i can find and lay down in it and look at the sky for a very very very long time",
                author: "art-notart-blog",
                url: "https://www.tumblr.com/art-notart-blog/145110445718"
        },
        {
                quote: "itâ€™s just me and the 5 people on here who know my oc by name against the world",
                author: "everchased",
                url: "https://everchased.tumblr.com/post/773625369494536192"
        },
        {
                quote: "having long distance friends is so fucked. do you wanna come over to my house and play (it will cost us 1 william dollars)",
                author: "molabuddy",
                url: "https://molabuddy.tumblr.com/post/775189590322593792"
        },
        {
                quote: "huge cheeseburger and $5000 dollars could fix me",
                author: "superbellsubways",
                url: "https://sylviegirly.tumblr.com/post/779849877674917888"
        }
];

// alternative
var randomIndex = Math.floor(Math.random() * quotes.length);
const finalQuote =
        quotes[randomIndex].quote +
        "<br/><i>â€” <a href='" +
        quotes[randomIndex].url +
        "' style='font-size: 0.8em'>" +
        quotes[randomIndex].author +
        "</a></i>";
document.getElementById("quote-spit").innerHTML = finalQuote;

function generateQuote() {
        var lastValue = document.getElementById("quote-spit").innerHTML;
        do {
                var randomIndex = Math.floor(Math.random() * quotes.length);
                const finalQuote =
                        quotes[randomIndex].quote +
                        "<br/><i>â€” <a href='" +
                        quotes[randomIndex].url +
                        "' style='font-size: 0.8em'>" +
                        quotes[randomIndex].author +
                        "</a></i>";
                document.getElementById("quote-spit").innerHTML = finalQuote;
        } while (lastValue == document.getElementById("quote-spit").innerHTML);
}
