module.exports = {
  content: ['./src/**/*.{vue,js}','./index.html'],
  theme: {
    extend: {
      colors:{
        'white': 'hsl(0, 0%, 100%)',
        'light-magenta':'hsl(293, 100%, 63%)',
        'light-violet':'hsl(264, 100%, 61%)',
        'light-grayish-violet':'hsl(270, 20%, 96%)',
        'dark-satured-violet':' hsl(271, 36%, 24%)',
        'very-light-magenta':'hsl(289, 100%, 72%)',
        'pale-violet':'hsl(276, 100%, 81%)',
        'moderate-violet':'hsl(276, 55%, 52%)',
        'desaturated-dark-violet':'hsl(271, 15%, 43%)',
        'placeholder-text-color':'hsl(206, 6%, 79%)',
        'paragraph':'hsl(270, 7%, 64%)'
      }
    },
  },
  plugins: [],
}
