<template>
    
    <tabs-wrapper>
        <tab-item :title="$t('teamTitle')">
            <img src="../assets/team.webp" class="w-[11em] mx-auto">
            {{ $t('teamContent') }}
        </tab-item>
        <tab-item :title="$t('teamMembers')">
            <ul class="flex flex-col gap-5">
                <li class="flex items-center justify-between border-b-gray-600 border-b pb-4">
                    <img src="../assets/HP.jpg" class="w-10 rounded-full" alt="img">
                    <span>Hussain Panahy</span>
                    <a href="mailto:hossein7090100@gmail.com"><i class="fa fa-envelope"/></a>
                </li>
                <li class="flex items-center justify-between">
                    <img src="../assets/mwas.jpg" class="w-10 rounded-full" alt="img">
                    <span>Dennis Mwangi</span>
                    <a href="mailto:dennismwas89@gmail.com"><i class="fa fa-envelope"/></a>
                </li>
            </ul>
        </tab-item>
        <tab-item :title="$t('achievements')">
            <img src="../assets/achievements.png" class="w-[11em] mx-auto">
         {{ $t('achievementsContent') }}
        </tab-item>
        <tab-item :title="$t('roadmap')">
            <img src="../assets/roadMap.png" class="w-[11em] mx-auto">
            {{ $t('roadmapContent') }}
        </tab-item>
        
    </tabs-wrapper>
</template>


<!-- <script type="text/javascript">
      Vue.use(Dropdown);
      new Vue({
        el: '#app',
        data () {
          return {
            options: [
              { name: 'Cat', id: 'cat' },
              { name: 'Dog', id: 'dog' },
              { name: 'Elephant', id: 'elephant' },
              { name: 'Girafe', id: 'girafe' },
              { name: 'Snake', id: 'snake' },
              { name: 'Spider', id: 'spider' },
              { name: 'Unicorn', id: 'unicorn' }              
            ],
            selected: { name: null, id: null }
          }
        },
        methods: {
          validateSelection(selection) {
            this.selected = selection;
            console.log(selection.name+' has been selected');
          },
          getDropdownValues(keyword) {
            console.log('You could refresh options by querying the API with '+keyword);
          }
        }
      });
    </script> -->