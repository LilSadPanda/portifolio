<template>
  <header>
  </header>
  <div class="grid h-screen place-items-center">
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <div class="avatar">
          <div class="w-24 mask mask-squircle">
            <img src="/pfp.jpg" />
          </div>
        </div>
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Juan Thiart</h2>
        <p>I like making things.</p>
        <div class="card-actions">
          <button class="btn btn-block btn-outline"><a target="_blank"
            href="https://www.linkedin.com/in/thiartjuan">LinkedIn</a></button>
          <button class="btn btn-block btn-outline"><a target="_bank" href="https://github.com/LilSadPanda">GitHub</a></button>
          <label class="btn btn-block btn-outline" for="my-modal-3">Contact</label>
          <input type="checkbox" id="my-modal-3" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box relative">
              <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 class="text-lg font-bold">You can contact me at:</h3>
              <p class="py-4">Discord - LilSadPanda#9989</p>
              <p class="py-4">Email - thiartjuan@gmail.com</p>
            </div>
          </div>
        </div>
        <label class="btn btn-sm btn-primary" for="modal-share">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
          </svg>
        </label>
        <input type="checkbox" id="modal-share" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label for="modal-share" class="btn btn-sm btn-square absolute right-2 top-2">✕</label>
            <h3 class="text-lg font-bold">Share my link!</h3>
            <div class="card-actions grid place-items-center">
              <button class="btn btn-wide btn-outline"><a target="_blank"
                  href="https://www.facebook.com/sharer.php?u=https://me.thiartjuan.co.za">Share on
                  Facebook</a></button>
              <button class="btn btn-wide btn-outline"><a target="_blank"
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https://me.thiartjuan.co.za">Share on
                  LinkedIn</a></button>
              <button class="btn btn-wide btn-outline"><a target="_blank"
                  href="https://twitter.com/intent/tweet?text=Contact%20-%20https://me.thiartjuan.co.za">Share on
                  Twitter</a></button>
              <button class="btn btn-wide btn-outline"><a target="_blank"
                  href="https://wa.me/?text=Contact%20-%20https://me.thiartjuan.co.za">Share via WhatsApp</a></button>
              <button class="btn btn-wide btn-outline"><a target="_blank"
                  href="mailto:?subject= Check out Juan's profile! &body= Link - https://me.thiartjuan.co.za">Share via
                  Email</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <main>
  </main>
</template>