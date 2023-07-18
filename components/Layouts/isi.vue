<template>
  <div class="bg-gray-100 flex-1 p-6 md:mt-16 md:w-full ">
    <div class="grid grid-cols-4 gap-6 xl:grid-cols-1">
      <div class="report-card">
        <div class="card">
          <div class="card-body flex flex-col">
            <div class="flex flex-row justify-between items-center">
              <div class="h6 text-indigo-700 fad fa-shopping-cart" />
              <span class="rounded-full text-white badge bg-teal-400 text-xs">
                12%
                <i class="fal fa-chevron-up ml-1" />
              </span>
            </div>
            <div class="mt-8">
              <h1 class="h5 num-4">
                12345
              </h1>
              <p>items sales</p>
            </div>
          </div>
        </div>
        <div class="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none" />
      </div>
      <div class="report-card">
        <div class="card">
          <div class="card-body flex flex-col">
            <div class="flex flex-row justify-between items-center">
              <div class="h6 text-red-700 fad fa-store" />
              <span class="rounded-full text-white badge bg-red-400 text-xs">
                6%
                <i class="fal fa-chevron-down ml-1" />
              </span>
            </div>
            <div class="mt-8">
              <h1 class="h5 num-4">
                12345
              </h1>
              <p>new orders</p>
            </div>
          </div>
        </div>
        <div class="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none" />
      </div>
      <div class="report-card">
        <div class="card">
          <div class="card-body flex flex-col">
            <!-- top -->
            <div class="flex flex-row justify-between items-center">
              <div class="h6 text-yellow-600 fad fa-sitemap" />
              <span class="rounded-full text-white badge bg-teal-400 text-xs">
                72%
                <i class="fal fa-chevron-up ml-1" />
              </span>
            </div>
            <!-- end top -->

            <!-- bottom -->
            <div class="mt-8">
              <h1 class="h5 num-4">
                12345
              </h1>
              <p>total Products</p>
            </div>
            <!-- end bottom -->
          </div>
        </div>
        <div class="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none" />
      </div>
      <!-- end card -->

      <!-- card -->
      <div class="report-card">
        <div class="card">
          <div class="card-body flex flex-col">
            <!-- top -->
            <div class="flex flex-row justify-between items-center">
              <div class="h6 text-green-700 fad fa-users" />
              <span class="rounded-full text-white badge bg-teal-400 text-xs">
                150%
                <font-awesome-icon :icon="['fas', 'user-secret']" />
              </span>
            </div>
            <!-- end top -->

            <!-- bottom -->
            <div class="mt-8">
              <h1 class="h5 num-4">
                12345
              </h1>
              <p>new Visitor</p>
            </div>
            <!-- end bottom -->
          </div>
        </div>
        <div class="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none" />
      </div>
      <!-- end card -->
    </div>
    <!-- End General Report -->
  </div>
</template>
<script>
export default {

}
</script>
