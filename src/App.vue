<template>
  <header>
  </header>
  <main>
    <div class="grid h-screen place-items-center bg-neutral-focus">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <div class="avatar">
            <div class="w-24 mask mask-squircle">
              <img src="/pfp.jpg" />
            </div>
          </div>
        </figure>
        <div class="card-body items-center text-center">
          <div>
            <div class="text-center">
              <div class="text-lg font-extrabold">Juan Thiart</div>
              <div class="my-3">I like making things.</div>
              <div class="text-sm">Technologies Used:</div>
            </div>
            <div class="mt-2 text-center space-x-1">
              <div class="badge badge-ghost">NodeJS</div>
              <div class="badge badge-ghost">JavaScript</div>
              <div class="badge badge-ghost">VueJS</div>
              <div class="badge badge-ghost">TailwindCSS</div>
              <div class="badge badge-ghost">HTML</div>
              <div class="badge badge-ghost">Docker</div>
              <div class="badge badge-ghost">MongoDB</div>
              <div class="badge badge-ghost">REST API's</div>
            </div>
          </div>
          <div class="place-items-center grid w-full gap-2">
            <button>
              <a class="btn btn-wide btn-outline" target="_blank"
                href="https://www.linkedin.com/in/thiartjuan">LinkedIn</a>
            </button>

            <button>
              <a class="btn btn-wide btn-outline" target="_blank" href="https://github.com/LilSadPanda">GitHub</a>
            </button>

            <button>
              <a class="btn btn-wide btn-outline" target="_blank" href="https://linktr.ee/jthiart">LinkTree</a>
            </button>

            <!-- BEGIN contact button and modal -->
            <div>
              <label for="contact-modal" class="btn btn-wide btn-outline">Contact</label>
              <input type="checkbox" id="contact-modal" class="modal-toggle" />
              <div class="modal">
                <div class="modal-box relative">
                  <label for="contact-modal" class="btn btn-sm btn-square absolute right-2 top-2">✕</label>
                  <div class="text-center">
                    <div class="text-lg font-extrabold my-3">You can contact me at:</div>
                    <div class="flex items-center p-1">
                      <span class="text-base-content/70 w-48 text-sm">Email:</span>
                      <a class="text-base-content/70 w-48 text-sm">thiartjuan@gmail.com</a>
                    </div>
                    <div class="flex items-center p-1">
                      <span class="text-base-content/70 w-48 text-sm">Discord:</span>
                      <a class="text-base-content/70 w-48 text-sm">LilSadPanda#9989</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- END contact button and modal -->

            <!-- BEGIN share button and modal -->
            <div>
              <label for="share-modal" class="btn btn-sm btn-outline ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 stroke-current">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z">
                  </path>
                </svg>
              </label>
              <input type="checkbox" id="share-modal" class="modal-toggle" />
              <div class="modal">
                <div class="modal-box relative">
                  <label for="share-modal" class="btn btn-sm btn-square absolute right-2 top-2">✕</label>
                  <div class="text-center">
                    <div class="text-lg font-extrabold my-3">Share my link.</div>
                    <div class="place-items-center grid w-full gap-2">
                      <button>
                        <a class="btn btn-wide btn-outline" target="_blank"
                          href="https://www.linkedin.com/in/thiartjuan">LinkedIn</a>
                      </button>

                      <button>
                        <a class="btn btn-wide btn-outline" target="_blank"
                          href="https://www.facebook.com/sharer.php?u=https://me.thiartjuan.co.za">Share on
                          Facebook</a>
                      </button>

                      <button>
                        <a class="btn btn-wide btn-outline" target="_blank"
                          href="https://www.linkedin.com/sharing/share-offsite/?url=https://me.thiartjuan.co.za">Share
                          on
                          LinkedIn</a>
                      </button>

                      <button>
                        <a class="btn btn-wide btn-outline" target="_blank"
                          href="https://twitter.com/intent/tweet?text=Contact%20-%20https://me.thiartjuan.co.za">Share
                          on
                          Twitter</a>
                      </button>

                      <button>
                        <a class="btn btn-wide btn-outline" target="_blank"
                          href="https://wa.me/?text=Check out Juan's profile!%20-%20https://me.thiartjuan.co.za">Share
                          via
                          WhatsApp</a>
                      </button>

                      <button>
                        <a class="btn btn-wide btn-outline" target="_blank"
                          href="mailto:?subject= Check out Juan's profile! &body= Link - https://me.thiartjuan.co.za">Share
                          via
                          Email</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- BEGIN share button and modal -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>