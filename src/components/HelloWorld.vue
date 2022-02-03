<script setup>
  name:'HelloWorld'
</script>

<template>
  <article class="flex flex-col gap-20 lg:flex-row lg:justify-center
  lg:items-center relative lg:before:absolute lg:gap-32 lg:before:w-2/5 
  lg:before:h-5/6 lg:before:bg-light-violet lg:before:-left-5 lg:before:top-0 
  lg:before:rounded-b-full">
    <section class="relative rounded-3xl bg-white max-w-[400px]  
      after:block after:absolute after:top-0 after:left-2/4 after:w-44
      after:h-10 after:bg-white after:rounded-full after:transform after:-translate-x-2/4
      lg:flex-grow lg:after:-h-9">
      <div class="p-4 lg:p-3">
        <header class="bg-gradient-to-r from-light-violet to-light-magenta
        rounded-t-3xl">
          <div class="flex items-end gap-3 pb-4 pl-5 min-h-[85px]
          lg:min-h-[80px] lg:gap-4 lg:pb-3 lg:pl-6">
            <div class="flex items-center gap-2 h-full">
              <i class="fas fa-chevron-left text-white"></i>
              <img src="../assets/desktop/avatar.jpg" alt=""
              class="rounded-full w-10 border-paragraph border-2">
            </div>
            <div class="flex flex-col text-left">
              <p class="leading-snug text-lg font-bold 
              lg:text-base"><span class="text-light-grayish-violet">Samuel Green</span></p>
              <p class="text-paragraph text-xs font-bold">Available to Walk</p>
            </div>
            <div class="self-end ml-auto mr-6 mb-3">
              <i class="fas fa-bars text-white"></i>
            </div>
          </div>
        </header>
        <div class="bg-light-grayish-violet pt-3 pl-3 pr-3 pb-7 flex flex-col 
        justify-start gap-4 lg:pb-5">
          <div class="max-w-[190px] flex flex-col gap-5 lg:gap-4
          lg:max-w-[210px]">
            <div class="bg-moderate-violet/10 py-2 pl-3 pr-4 rounded-2xl
            lg:pr-3">
              <p class="text-moderate-violet font-bold
              lg:text-[.8rem]">That sounds great. I'd be happy to discuss more</p>
            </div>
            <div class="bg-moderate-violet/10 py-2 pl-3 pr-4 rounded-2xl
            lg:pr-2">
              <p class="text-moderate-violet font-bold
              lg:text-[.8rem]">Could you send over some pictures of your dog, please?</p>
            </div>
          </div>
          <div class="flex flex-col items-end self-end gap-3 max-w-[200px]">
            <div class="flex gap-5 lg:gap-4">
              <div class="rounded-lg overflow-hidden">
                <img src="../assets/desktop/dog-image-1.jpg" alt="" loading="lazy" 
                class="max-w-full">
              </div>
            <div class="rounded-lg overflow-hidden">
                <img src="../assets/desktop/dog-image-2.jpg" alt="" loading="lazy" 
                class="max-w-full">
            </div>
            <div class="rounded-lg overflow-hidden">
                <img src="../assets/desktop/dog-image-3.jpg" alt="" loading="lazy" 
                class="max-w-full">
            </div>
            </div>
            <div class="bg-white rounded-tl-xl rounded-tr-xl rounded-br-lg rounded-bl-xl p-2">
              <p class="text-desaturated-dark-violet lg:text-[.8rem]">Here a few pictures. She's a happy girl!</p>
            </div>
            <div class="bg-white rounded-tl-xl rounded-tr-xl rounded-br-lg rounded-bl-xl p-2">
              <p class="text-desaturated-dark-violet lg:text-[.8rem]">Can you make it?</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="bg-moderate-violet/10 py-2 pl-3 pr-4 rounded-2xl w-[75%]
            lg:max-w-[220px] lg:pr-2">
              <p class="text-moderate-violet font-bold text-sm leading-5
              lg:text-[.8rem]">She looks so happy! The time we discussed works. How long shall i take
                her out for?
              </p>
            </div>
            <div class="w-[90%] bg-gradient-to-l from-light-violet to-light-magenta
            flex justify-around items-center px-4 py-3 rounded-xl gap-3
            lg:w-[75%] lg:py-2">
              <div class="rounded-full p-3 border-2 border-very-light-magenta
              lg:p-2"></div>
              <p class="text-white lg:text-sm">30 minutes walk</p>
              <span class="text-white text-2xl lg:text-xl">$29</span>
            </div>
            <div class="w-[90%] bg-gradient-to-l from-light-violet to-light-magenta
            flex justify-around items-center px-4 py-3 rounded-xl gap-3 lg:w-[75%]
            lg:p-2">
              <div class="rounded-full p-3 border-2 border-very-light-magenta
              lg:p-2"></div>
              <p class="text-white lg:text-sm">30 minutes walk</p>
              <span class="text-white text-2xl lg:text-xl">$29</span>
            </div>
          </div>
        </div>
        <footer class="bg-light-grayish-violet rounded-br-3xl rounded-bl-3xl
        px-4 pb-4">
          <div class="relative">
            <input type="text" placeholder="Type a message..."
            class="w-full pt-3 pb-3 pr-3 pl-5 rounded-full">
            <div class="bg-dark-satured-violet rounded-full border-2 w-10 h-10 py-1.5 text-center
            absolute top-1 right-2 cursor-pointer">
              <i class="fas fa-chevron-right text-white"></i>
            </div> 
          </div>
        </footer>
      </div>
    </section>
    <section class="text-center pb-10 lg:text-left lg:w-[35%]">
        <h1 class="text-dark-satured-violet text-4xl font-bold
        lg:text-5xl">Simble booking</h1>
        <p class="mt-8 leading-loose text-base px-5 lg:px-0 lg:mt-5
        lg:leading-relaxed lg:min-w-fit lg:text-lg">Stay in touch our dog walkers throught the chat interface. This makes it
          easy to discuss arrangments and make bookings. Once the walk has been completed you can rate your walker and book again
          all throught the chat.
        </p>
    </section>
  </article>
</template>

