// get the close btn
const alert_button = document.getElementsByClassName('alert-btn-close')

// looping into all alert close btns
for (let i = 0; i < alert_button.length; i++) {
  const btn = alert_button[i]

  btn.addEventListener('click', function () {
    const dad = this.parentNode
    dad.classList.add('animated', 'fadeOut')
    setTimeout(() => {
      dad.remove()
    }, 1000)
  })
}
// check if the page have dropdwon menu
const dropdown = document.getElementsByClassName('dropdown')

if (dropdown.length >= 1) {
  for (let i = 0; i < dropdown.length; i++) {
    const item = dropdown[i]

    var menu, btn, overflow

    item.addEventListener('click', function () {
      for (let i = 0; i < this.children.length; i++) {
        const e = this.children[i]

        if (e.classList.contains('menu')) {
          menu = e
        } else if (e.classList.contains('menu-btn')) {
          btn = e
        } else if (e.classList.contains('menu-overflow')) {
          overflow = e
        }
      }

      if (menu.classList.contains('hidden')) {
        // show the menu
        showMenu()
      } else {
        // hide the menu
        hideMenu()
      }
    })

    var showMenu = function () {
      menu.classList.remove('hidden')
      menu.classList.add('fadeIn')
      overflow.classList.remove('hidden')
    }

    var hideMenu = function () {
      menu.classList.add('hidden')
      overflow.classList.add('hidden')
      menu.classList.remove('fadeIn')
    }
  }
};

const first = ['Aaran', 'Aaren', 'Aarez', 'Aarman', 'Aaron', 'Aaron-James', 'Aarron', 'Aaryan', 'Aaryn', 'Aayan', 'Aazaan', 'Abaan', 'Abbas', 'Abdallah', 'Abdalroof', 'Abdihakim', 'Abdirahman', 'Abdisalam', 'Abdul', 'Abdul-Aziz', 'Abdulbasir', 'Abdulkadir', 'Abdulkarem', 'Abdulkhader', 'Abdullah', 'Abdul-Majeed', 'Abdulmalik', 'Abdul-Rehman', 'Abdur', 'Abdurraheem', 'Abdur-Rahman', 'Abdur-Rehmaan', 'Abel', 'Abhinav', 'Abhisumant', 'Abid', 'Abir', 'Abraham', 'Abu', 'Abubakar', 'Ace', 'Adain', 'Adam', 'Adam-James', 'Addison', 'Addisson', 'Adegbola', 'Adegbolahan', 'Aden', 'Adenn', 'Adie', 'Adil', 'Aditya', 'Adnan', 'Adrian', 'Adrien', 'Aedan', 'Aedin', 'Aedyn', 'Aeron', 'Afonso', 'Ahmad', 'Ahmed', 'Ahmed-Aziz', 'Ahoua', 'Ahtasham', 'Aiadan', 'Aidan', 'Aiden', 'Aiden-Jack', 'Aiden-Vee', 'Aidian', 'Aidy', 'Ailin', 'Aiman', 'Ainsley', 'Ainslie', 'Airen', 'Airidas', 'Airlie', 'AJ', 'Ajay', 'A-Jay', 'Ajayraj', 'Akan', 'Akram', 'Al', 'Ala', 'Alan', 'Alanas', 'Alasdair', 'Alastair', 'Alber', 'Albert', 'Albie', 'Aldred', 'Alec', 'Aled', 'Aleem', 'Aleksandar', 'Aleksander', 'Aleksandr', 'Aleksandrs', 'Alekzander', 'Alessandro', 'Alessio', 'Alex', 'Alexander', 'Alexei', 'Alexx', 'Alexzander', 'Alf', 'Alfee', 'Alfie', 'Alfred', 'Alfy', 'Alhaji', 'Al-Hassan', 'Ali', 'Aliekber', 'Alieu', 'Alihaider', 'Alisdair', 'Alishan', 'Alistair', 'Alistar', 'Alister', 'Aliyaan', 'Allan', 'Allan-Laiton', 'Allen', 'Allesandro', 'Allister', 'Ally', 'Alphonse', 'Altyiab', 'Alum', 'Alvern', 'Alvin', 'Alyas', 'Amaan', 'Aman', 'Amani', 'Ambanimoh', 'Ameer', 'Amgad', 'Ami', 'Amin', 'Amir', 'Ammaar', 'Ammar', 'Ammer', 'Amolpreet', 'Amos', 'Amrinder', 'Amrit', 'Amro', 'Anay', 'Andrea', 'Andreas', 'Andrei', 'Andrejs', 'Andrew', 'Andy', 'Anees', 'Anesu', 'Angel', 'Angelo', 'Angus', 'Anir', 'Anis', 'Anish', 'Anmolpreet', 'Annan', 'Anndra', 'Anselm', 'Anthony', 'Anthony-John', 'Antoine', 'Anton', 'Antoni', 'Antonio', 'Antony', 'Antonyo', 'Anubhav', 'Aodhan', 'Aon', 'Aonghus', 'Apisai', 'Arafat', 'Aran', 'Arandeep', 'Arann', 'Aray', 'Arayan', 'Archibald', 'Archie', 'Arda', 'Ardal', 'Ardeshir', 'Areeb', 'Areez', 'Aref', 'Arfin', 'Argyle', 'Argyll', 'Ari', 'Aria', 'Arian', 'Arihant', 'Aristomenis', 'Aristotelis', 'Arjuna', 'Arlo', 'Armaan', 'Arman', 'Armen', 'Arnab', 'Arnav', 'Arnold', 'Aron', 'Aronas', 'Arran', 'Arrham', 'Arron', 'Arryn', 'Arsalan', 'Artem', 'Arthur', 'Artur', 'Arturo', 'Arun', 'Arunas', 'Arved', 'Arya', 'Aryan', 'Aryankhan', 'Aryian', 'Aryn', 'Asa', 'Asfhan', 'Ash', 'Ashlee-jay', 'Ashley', 'Ashton', 'Ashton-Lloyd', 'Ashtyn', 'Ashwin', 'Asif', 'Asim', 'Aslam', 'Asrar', 'Ata', 'Atal', 'Atapattu', 'Ateeq', 'Athol', 'Athon', 'Athos-Carlos', 'Atli', 'Atom', 'Attila', 'Aulay', 'Aun', 'Austen', 'Austin', 'Avani', 'Averon', 'Avi', 'Avinash', 'Avraham', 'Awais', 'Awwal', 'Axel', 'Ayaan', 'Ayan', 'Aydan', 'Ayden', 'Aydin', 'Aydon', 'Ayman', 'Ayomide', 'Ayren', 'Ayrton', 'Aytug', 'Ayub', 'Ayyub', 'Azaan', 'Azedine', 'Azeem', 'Azim', 'Aziz', 'Azlan', 'Azzam', 'Azzedine', 'Babatunmise', 'Babur', 'Bader', 'Badr', 'Badsha', 'Bailee', 'Bailey', 'Bailie', 'Bailley', 'Baillie', 'Baley', 'Balian', 'Banan', 'Barath', 'Barkley', 'Barney', 'Baron', 'Barrie', 'Barry', 'Bartlomiej', 'Bartosz', 'Basher', 'Basile', 'Baxter', 'Baye', 'Bayley', 'Beau', 'Beinn', 'Bekim', 'Believe', 'Ben', 'Bendeguz', 'Benedict', 'Benjamin', 'Benjamyn', 'Benji', 'Benn', 'Bennett', 'Benny', 'Benoit', 'Bentley', 'Berkay', 'Bernard', 'Bertie', 'Bevin', 'Bezalel', 'Bhaaldeen', 'Bharath', 'Bilal', 'Bill', 'Billy', 'Binod', 'Bjorn', 'Blaike', 'Blaine', 'Blair', 'Blaire', 'Blake', 'Blazej', 'Blazey', 'Blessing', 'Blue', 'Blyth', 'Bo', 'Boab', 'Bob', 'Bobby', 'Bobby-Lee', 'Bodhan', 'Boedyn', 'Bogdan', 'Bohbi', 'Bony', 'Bowen', 'Bowie', 'Boyd', 'Bracken', 'Brad', 'Bradan', 'Braden', 'Bradley', 'Bradlie', 'Bradly', 'Brady', 'Bradyn', 'Braeden', 'Braiden', 'Brajan', 'Brandan', 'Branden', 'Brandon', 'Brandonlee', 'Brandon-Lee', 'Brandyn', 'Brannan', 'Brayden', 'Braydon', 'Braydyn', 'Breandan', 'Brehme', 'Brendan', 'Brendon', 'Brendyn', 'Breogan', 'Bret', 'Brett', 'Briaddon', 'Brian', 'Brodi', 'Brodie', 'Brody', 'Brogan', 'Broghan', 'Brooke', 'Brooklin', 'Brooklyn', 'Bruce', 'Bruin', 'Bruno', 'Brunon', 'Bryan', 'Bryce', 'Bryden', 'Brydon', 'Brydon-Craig', 'Bryn', 'Brynmor', 'Bryson', 'Buddy', 'Bully', 'Burak', 'Burhan', 'Butali', 'Butchi', 'Byron', 'Cabhan', 'Cadan', 'Cade', 'Caden', 'Cadon', 'Cadyn', 'Caedan', 'Caedyn', 'Cael', 'Caelan', 'Caelen', 'Caethan', 'Cahl', 'Cahlum', 'Cai', 'Caidan', 'Caiden', 'Caiden-Paul', 'Caidyn', 'Caie', 'Cailaen', 'Cailean', 'Caileb-John', 'Cailin', 'Cain', 'Caine', 'Cairn', 'Cal', 'Calan', 'Calder', 'Cale', 'Calean', 'Caleb', 'Calen', 'Caley', 'Calib', 'Calin', 'Callahan', 'Callan', 'Callan-Adam', 'Calley', 'Callie', 'Callin', 'Callum', 'Callun', 'Callyn', 'Calum', 'Calum-James', 'Calvin', 'Cambell', 'Camerin', 'Cameron', 'Campbel', 'Campbell', 'Camron', 'Caolain', 'Caolan', 'Carl', 'Carlo', 'Carlos', 'Carrich', 'Carrick', 'Carson', 'Carter', 'Carwyn', 'Casey', 'Casper', 'Cassy', 'Cathal', 'Cator', 'Cavan', 'Cayden', 'Cayden-Robert', 'Cayden-Tiamo', 'Ceejay', 'Ceilan', 'Ceiran', 'Ceirin', 'Ceiron', 'Cejay', 'Celik', 'Cephas', 'Cesar', 'Cesare', 'Chad', 'Chaitanya', 'Chang-Ha', 'Charles', 'Charley', 'Charlie', 'Charly', 'Chase', 'Che', 'Chester', 'Chevy', 'Chi', 'Chibudom', 'Chidera', 'Chimsom', 'Chin', 'Chintu', 'Chiqal', 'Chiron', 'Chris', 'Chris-Daniel', 'Chrismedi', 'Christian', 'Christie', 'Christoph', 'Christopher', 'Christopher-Lee', 'Christy', 'Chu', 'Chukwuemeka', 'Cian', 'Ciann', 'Ciar', 'Ciaran', 'Ciarian', 'Cieran', 'Cillian', 'Cillin', 'Cinar', 'CJ', 'C-Jay', 'Clark', 'Clarke', 'Clayton', 'Clement', 'Clifford', 'Clyde', 'Cobain', 'Coban', 'Coben', 'Cobi', 'Cobie', 'Coby', 'Codey', 'Codi', 'Codie', 'Cody', 'Cody-Lee', 'Coel', 'Cohan', 'Cohen', 'Colby', 'Cole', 'Colin', 'Coll', 'Colm', 'Colt', 'Colton', 'Colum', 'Colvin', 'Comghan', 'Conal', 'Conall', 'Conan', 'Conar', 'Conghaile', 'Conlan', 'Conley', 'Conli', 'Conlin', 'Conlly', 'Conlon', 'Conlyn', 'Connal', 'Connall', 'Connan', 'Connar', 'Connel', 'Connell', 'Conner', 'Connolly', 'Connor', 'Connor-David', 'Conor', 'Conrad', 'Cooper', 'Copeland', 'Coray', 'Corben', 'Corbin', 'Corey', 'Corey-James', 'Corey-Jay', 'Cori', 'Corie', 'Corin', 'Cormac', 'Cormack', 'Cormak', 'Corran', 'Corrie', 'Cory', 'Cosmo', 'Coupar', 'Craig', 'Craig-James', 'Crawford', 'Creag', 'Crispin', 'Cristian', 'Crombie', 'Cruiz', 'Cruz', 'Cuillin', 'Cullen', 'Cullin', 'Curtis', 'Cyrus', 'Daanyaal', 'Daegan', 'Daegyu', 'Dafydd', 'Dagon', 'Dailey', 'Daimhin', 'Daithi', 'Dakota', 'Daksh', 'Dale', 'Dalong', 'Dalton', 'Damian', 'Damien', 'Damon', 'Dan', 'Danar', 'Dane', 'Danial', 'Daniel', 'Daniele', 'Daniel-James', 'Daniels', 'Daniil', 'Danish', 'Daniyal', 'Danniel', 'Danny', 'Dante', 'Danyal', 'Danyil', 'Danys', 'Daood', 'Dara', 'Darach', 'Daragh', 'Darcy', "D'arcy", 'Dareh', 'Daren', 'Darien', 'Darius', 'Darl', 'Darn', 'Darrach', 'Darragh', 'Darrel', 'Darrell', 'Darren', 'Darrie', 'Darrius', 'Darroch', 'Darryl', 'Darryn', 'Darwyn', 'Daryl', 'Daryn', 'Daud', 'Daumantas', 'Davi', 'David', 'David-Jay', 'David-Lee', 'Davie', 'Davis', 'Davy', 'Dawid', 'Dawson', 'Dawud', 'Dayem', 'Daymian', 'Deacon', 'Deagan', 'Dean', 'Deano', 'Decklan', 'Declain', 'Declan', 'Declyan', 'Declyn', 'Dedeniseoluwa', 'Deecan', 'Deegan', 'Deelan', 'Deklain-Jaimes', 'Del', 'Demetrius', 'Denis', 'Deniss', 'Dennan', 'Dennin', 'Dennis', 'Denny', 'Dennys', 'Denon', 'Denton', 'Denver', 'Denzel', 'Deon', 'Derek', 'Derick', 'Derin', 'Dermot', 'Derren', 'Derrie', 'Derrin', 'Derron', 'Derry', 'Derryn', 'Deryn', 'Deshawn', 'Desmond', 'Dev', 'Devan', 'Devin', 'Devlin', 'Devlyn', 'Devon', 'Devrin', 'Devyn', 'Dex', 'Dexter', 'Dhani', 'Dharam', 'Dhavid', 'Dhyia', 'Diarmaid', 'Diarmid', 'Diarmuid', 'Didier', 'Diego', 'Diesel', 'Diesil', 'Digby', 'Dilan', 'Dilano', 'Dillan', 'Dillon', 'Dilraj', 'Dimitri', 'Dinaras', 'Dion', 'Dissanayake', 'Dmitri', 'Doire', 'Dolan', 'Domanic', 'Domenico', 'Domhnall', 'Dominic', 'Dominick', 'Dominik', 'Donald', 'Donnacha', 'Donnie', 'Dorian', 'Dougal', 'Douglas', 'Dougray', 'Drakeo', 'Dre', 'Dregan', 'Drew', 'Dugald', 'Duncan', 'Duriel', 'Dustin', 'Dylan', 'Dylan-Jack', 'Dylan-James', 'Dylan-John', 'Dylan-Patrick', 'Dylin', 'Dyllan', 'Dyllan-James', 'Dyllon', 'Eadie', 'Eagann', 'Eamon', 'Eamonn', 'Eason', 'Eassan', 'Easton', 'Ebow', 'Ed', 'Eddie', 'Eden', 'Ediomi', 'Edison', 'Eduardo', 'Eduards', 'Edward', 'Edwin', 'Edwyn', 'Eesa', 'Efan', 'Efe', 'Ege', 'Ehsan', 'Ehsen', 'Eiddon', 'Eidhan', 'Eihli', 'Eimantas', 'Eisa', 'Eli', 'Elias', 'Elijah', 'Eliot', 'Elisau', 'Eljay', 'Eljon', 'Elliot', 'Elliott', 'Ellis', 'Ellisandro', 'Elshan', 'Elvin', 'Elyan', 'Emanuel', 'Emerson', 'Emil', 'Emile', 'Emir', 'Emlyn', 'Emmanuel', 'Emmet', 'Eng', 'Eniola', 'Enis', 'Ennis', 'Enrico', 'Enrique', 'Enzo', 'Eoghain', 'Eoghan', 'Eoin', 'Eonan', 'Erdehan', 'Eren', 'Erencem', 'Eric', 'Ericlee', 'Erik', 'Eriz', 'Ernie-Jacks', 'Eroni', 'Eryk', 'Eshan', 'Essa', 'Esteban', 'Ethan', 'Etienne', 'Etinosa', 'Euan', 'Eugene', 'Evan', 'Evann', 'Ewan', 'Ewen', 'Ewing', 'Exodi', 'Ezekiel', 'Ezra', 'Fabian', 'Fahad', 'Faheem', 'Faisal', 'Faizaan', 'Famara', 'Fares', 'Farhaan', 'Farhan', 'Farren', 'Farzad', 'Fauzaan', 'Favour', 'Fawaz', 'Fawkes', 'Faysal', 'Fearghus', 'Feden', 'Felix', 'Fergal', 'Fergie', 'Fergus', 'Ferre', 'Fezaan', 'Fiachra', 'Fikret', 'Filip', 'Filippo', 'Finan', 'Findlay', 'Findlay-James', 'Findlie', 'Finlay', 'Finley', 'Finn', 'Finnan', 'Finnean', 'Finnen', 'Finnlay', 'Finnley', 'Fintan', 'Fionn', 'Firaaz', 'Fletcher', 'Flint', 'Florin', 'Flyn', 'Flynn', 'Fodeba', 'Folarinwa', 'Forbes', 'Forgan', 'Forrest', 'Fox', 'Francesco', 'Francis', 'Francisco', 'Franciszek', 'Franco', 'Frank', 'Frankie', 'Franklin', 'Franko', 'Fraser', 'Frazer', 'Fred', 'Freddie', 'Frederick', 'Fruin', 'Fyfe', 'Fyn', 'Fynlay', 'Fynn', 'Gabriel', 'Gallagher', 'Gareth', 'Garren', 'Garrett', 'Garry', 'Gary', 'Gavin', 'Gavin-Lee', 'Gene', 'Geoff', 'Geoffrey', 'Geomer', 'Geordan', 'Geordie']
const last = ['Aaran', 'Aaren', 'Aarez', 'Aarman', 'Aaron', 'Aaron-James', 'Aarron', 'Aaryan', 'Aaryn', 'Aayan', 'Aazaan', 'Abaan', 'Abbas', 'Abdallah', 'Abdalroof', 'Abdihakim', 'Abdirahman', 'Abdisalam', 'Abdul', 'Abdul-Aziz', 'Abdulbasir', 'Abdulkadir', 'Abdulkarem', 'Abdulkhader', 'Abdullah', 'Abdul-Majeed', 'Abdulmalik', 'Abdul-Rehman', 'Abdur', 'Abdurraheem', 'Abdur-Rahman', 'Abdur-Rehmaan', 'Abel', 'Abhinav', 'Abhisumant', 'Abid', 'Abir', 'Abraham', 'Abu', 'Abubakar', 'Ace', 'Adain', 'Adam', 'Adam-James', 'Addison', 'Addisson', 'Adegbola', 'Adegbolahan', 'Aden', 'Adenn', 'Adie', 'Adil', 'Aditya', 'Adnan', 'Adrian', 'Adrien', 'Aedan', 'Aedin', 'Aedyn', 'Aeron', 'Afonso', 'Ahmad', 'Ahmed', 'Ahmed-Aziz', 'Ahoua', 'Ahtasham', 'Aiadan', 'Aidan', 'Aiden', 'Aiden-Jack', 'Aiden-Vee', 'Aidian', 'Aidy', 'Ailin', 'Aiman', 'Ainsley', 'Ainslie', 'Airen', 'Airidas', 'Airlie', 'AJ', 'Ajay', 'A-Jay', 'Ajayraj', 'Akan', 'Akram', 'Al', 'Ala', 'Alan', 'Alanas', 'Alasdair', 'Alastair', 'Alber', 'Albert', 'Albie', 'Aldred', 'Alec', 'Aled', 'Aleem', 'Aleksandar', 'Aleksander', 'Aleksandr', 'Aleksandrs', 'Alekzander', 'Alessandro', 'Alessio', 'Alex', 'Alexander', 'Alexei', 'Alexx', 'Alexzander', 'Alf', 'Alfee', 'Alfie', 'Alfred', 'Alfy', 'Alhaji', 'Al-Hassan', 'Ali', 'Aliekber', 'Alieu', 'Alihaider', 'Alisdair', 'Alishan', 'Alistair', 'Alistar', 'Alister', 'Aliyaan', 'Allan', 'Allan-Laiton', 'Allen', 'Allesandro', 'Allister', 'Ally', 'Alphonse', 'Altyiab', 'Alum', 'Alvern', 'Alvin', 'Alyas', 'Amaan', 'Aman', 'Amani', 'Ambanimoh', 'Ameer', 'Amgad', 'Ami', 'Amin', 'Amir', 'Ammaar', 'Ammar', 'Ammer', 'Amolpreet', 'Amos', 'Amrinder', 'Amrit', 'Amro', 'Anay', 'Andrea', 'Andreas', 'Andrei', 'Andrejs', 'Andrew', 'Andy', 'Anees', 'Anesu', 'Angel', 'Angelo', 'Angus', 'Anir', 'Anis', 'Anish', 'Anmolpreet', 'Annan', 'Anndra', 'Anselm', 'Anthony', 'Anthony-John', 'Antoine', 'Anton', 'Antoni', 'Antonio', 'Antony', 'Antonyo', 'Anubhav', 'Aodhan', 'Aon', 'Aonghus', 'Apisai', 'Arafat', 'Aran', 'Arandeep', 'Arann', 'Aray', 'Arayan', 'Archibald', 'Archie', 'Arda', 'Ardal', 'Ardeshir', 'Areeb', 'Areez', 'Aref', 'Arfin', 'Argyle', 'Argyll', 'Ari', 'Aria', 'Arian', 'Arihant', 'Aristomenis', 'Aristotelis', 'Arjuna', 'Arlo', 'Armaan', 'Arman', 'Armen', 'Arnab', 'Arnav', 'Arnold', 'Aron', 'Aronas', 'Arran', 'Arrham', 'Arron', 'Arryn', 'Arsalan', 'Artem', 'Arthur', 'Artur', 'Arturo', 'Arun', 'Arunas', 'Arved', 'Arya', 'Aryan', 'Aryankhan', 'Aryian', 'Aryn', 'Asa', 'Asfhan', 'Ash', 'Ashlee-jay', 'Ashley', 'Ashton', 'Ashton-Lloyd', 'Ashtyn', 'Ashwin', 'Asif', 'Asim', 'Aslam', 'Asrar', 'Ata', 'Atal', 'Atapattu', 'Ateeq', 'Athol', 'Athon', 'Athos-Carlos', 'Atli', 'Atom', 'Attila', 'Aulay', 'Aun', 'Austen', 'Austin', 'Avani', 'Averon', 'Avi', 'Avinash', 'Avraham', 'Awais', 'Awwal', 'Axel', 'Ayaan', 'Ayan', 'Aydan', 'Ayden', 'Aydin', 'Aydon', 'Ayman', 'Ayomide', 'Ayren', 'Ayrton', 'Aytug', 'Ayub', 'Ayyub', 'Azaan', 'Azedine', 'Azeem', 'Azim', 'Aziz', 'Azlan', 'Azzam', 'Azzedine', 'Babatunmise', 'Babur', 'Bader', 'Badr', 'Badsha', 'Bailee', 'Bailey', 'Bailie', 'Bailley', 'Baillie', 'Baley', 'Balian', 'Banan', 'Barath', 'Barkley', 'Barney', 'Baron', 'Barrie', 'Barry', 'Bartlomiej', 'Bartosz', 'Basher', 'Basile', 'Baxter', 'Baye', 'Bayley', 'Beau', 'Beinn', 'Bekim', 'Believe', 'Ben', 'Bendeguz', 'Benedict', 'Benjamin', 'Benjamyn', 'Benji', 'Benn', 'Bennett', 'Benny', 'Benoit', 'Bentley', 'Berkay', 'Bernard', 'Bertie', 'Bevin', 'Bezalel', 'Bhaaldeen', 'Bharath', 'Bilal', 'Bill', 'Billy', 'Binod', 'Bjorn', 'Blaike', 'Blaine', 'Blair', 'Blaire', 'Blake', 'Blazej', 'Blazey', 'Blessing', 'Blue', 'Blyth', 'Bo', 'Boab', 'Bob', 'Bobby', 'Bobby-Lee', 'Bodhan', 'Boedyn', 'Bogdan', 'Bohbi', 'Bony', 'Bowen', 'Bowie', 'Boyd', 'Bracken', 'Brad', 'Bradan', 'Braden', 'Bradley', 'Bradlie', 'Bradly', 'Brady', 'Bradyn', 'Braeden', 'Braiden', 'Brajan', 'Brandan', 'Branden', 'Brandon', 'Brandonlee', 'Brandon-Lee', 'Brandyn', 'Brannan', 'Brayden', 'Braydon', 'Braydyn', 'Breandan', 'Brehme', 'Brendan', 'Brendon', 'Brendyn', 'Breogan', 'Bret', 'Brett', 'Briaddon', 'Brian', 'Brodi', 'Brodie', 'Brody', 'Brogan', 'Broghan', 'Brooke', 'Brooklin', 'Brooklyn', 'Bruce', 'Bruin', 'Bruno', 'Brunon', 'Bryan', 'Bryce', 'Bryden', 'Brydon', 'Brydon-Craig', 'Bryn', 'Brynmor', 'Bryson', 'Buddy', 'Bully', 'Burak', 'Burhan', 'Butali', 'Butchi', 'Byron', 'Cabhan', 'Cadan', 'Cade', 'Caden', 'Cadon', 'Cadyn', 'Caedan', 'Caedyn', 'Cael', 'Caelan', 'Caelen', 'Caethan', 'Cahl', 'Cahlum', 'Cai', 'Caidan', 'Caiden', 'Caiden-Paul', 'Caidyn', 'Caie', 'Cailaen', 'Cailean', 'Caileb-John', 'Cailin', 'Cain', 'Caine', 'Cairn', 'Cal', 'Calan', 'Calder', 'Cale', 'Calean', 'Caleb', 'Calen', 'Caley', 'Calib', 'Calin', 'Callahan', 'Callan', 'Callan-Adam', 'Calley', 'Callie', 'Callin', 'Callum', 'Callun', 'Callyn', 'Calum', 'Calum-James', 'Calvin', 'Cambell', 'Camerin', 'Cameron', 'Campbel', 'Campbell', 'Camron', 'Caolain', 'Caolan', 'Carl', 'Carlo', 'Carlos', 'Carrich', 'Carrick', 'Carson', 'Carter', 'Carwyn', 'Casey', 'Casper', 'Cassy', 'Cathal', 'Cator', 'Cavan', 'Cayden', 'Cayden-Robert', 'Cayden-Tiamo', 'Ceejay', 'Ceilan', 'Ceiran', 'Ceirin', 'Ceiron', 'Cejay', 'Celik', 'Cephas', 'Cesar', 'Cesare', 'Chad', 'Chaitanya', 'Chang-Ha', 'Charles', 'Charley', 'Charlie', 'Charly', 'Chase', 'Che', 'Chester', 'Chevy', 'Chi', 'Chibudom', 'Chidera', 'Chimsom', 'Chin', 'Chintu', 'Chiqal', 'Chiron', 'Chris', 'Chris-Daniel', 'Chrismedi', 'Christian', 'Christie', 'Christoph', 'Christopher', 'Christopher-Lee', 'Christy', 'Chu', 'Chukwuemeka', 'Cian', 'Ciann', 'Ciar', 'Ciaran', 'Ciarian', 'Cieran', 'Cillian', 'Cillin', 'Cinar', 'CJ', 'C-Jay', 'Clark', 'Clarke', 'Clayton', 'Clement', 'Clifford', 'Clyde', 'Cobain', 'Coban', 'Coben', 'Cobi', 'Cobie', 'Coby', 'Codey', 'Codi', 'Codie', 'Cody', 'Cody-Lee', 'Coel', 'Cohan', 'Cohen', 'Colby', 'Cole', 'Colin', 'Coll', 'Colm', 'Colt', 'Colton', 'Colum', 'Colvin', 'Comghan', 'Conal', 'Conall', 'Conan', 'Conar', 'Conghaile', 'Conlan', 'Conley', 'Conli', 'Conlin', 'Conlly', 'Conlon', 'Conlyn', 'Connal', 'Connall', 'Connan', 'Connar', 'Connel', 'Connell', 'Conner', 'Connolly', 'Connor', 'Connor-David', 'Conor', 'Conrad', 'Cooper', 'Copeland', 'Coray', 'Corben', 'Corbin', 'Corey', 'Corey-James', 'Corey-Jay', 'Cori', 'Corie', 'Corin', 'Cormac', 'Cormack', 'Cormak', 'Corran', 'Corrie', 'Cory', 'Cosmo', 'Coupar', 'Craig', 'Craig-James', 'Crawford', 'Creag', 'Crispin', 'Cristian', 'Crombie', 'Cruiz', 'Cruz', 'Cuillin', 'Cullen', 'Cullin', 'Curtis', 'Cyrus', 'Daanyaal', 'Daegan', 'Daegyu', 'Dafydd', 'Dagon', 'Dailey', 'Daimhin', 'Daithi', 'Dakota', 'Daksh', 'Dale', 'Dalong', 'Dalton', 'Damian', 'Damien', 'Damon', 'Dan', 'Danar', 'Dane', 'Danial', 'Daniel', 'Daniele', 'Daniel-James', 'Daniels', 'Daniil', 'Danish', 'Daniyal', 'Danniel', 'Danny', 'Dante', 'Danyal', 'Danyil', 'Danys', 'Daood', 'Dara', 'Darach', 'Daragh', 'Darcy', "D'arcy", 'Dareh', 'Daren', 'Darien', 'Darius', 'Darl', 'Darn', 'Darrach', 'Darragh', 'Darrel', 'Darrell', 'Darren', 'Darrie', 'Darrius', 'Darroch', 'Darryl', 'Darryn', 'Darwyn', 'Daryl', 'Daryn', 'Daud', 'Daumantas', 'Davi', 'David', 'David-Jay', 'David-Lee', 'Davie', 'Davis', 'Davy', 'Dawid', 'Dawson', 'Dawud', 'Dayem', 'Daymian', 'Deacon', 'Deagan', 'Dean', 'Deano', 'Decklan', 'Declain', 'Declan', 'Declyan', 'Declyn', 'Dedeniseoluwa', 'Deecan', 'Deegan', 'Deelan', 'Deklain-Jaimes', 'Del', 'Demetrius', 'Denis', 'Deniss', 'Dennan', 'Dennin', 'Dennis', 'Denny', 'Dennys', 'Denon', 'Denton', 'Denver', 'Denzel', 'Deon', 'Derek', 'Derick', 'Derin', 'Dermot', 'Derren', 'Derrie', 'Derrin', 'Derron', 'Derry', 'Derryn', 'Deryn', 'Deshawn', 'Desmond', 'Dev', 'Devan', 'Devin', 'Devlin', 'Devlyn', 'Devon', 'Devrin', 'Devyn', 'Dex', 'Dexter', 'Dhani', 'Dharam', 'Dhavid', 'Dhyia', 'Diarmaid', 'Diarmid', 'Diarmuid', 'Didier', 'Diego', 'Diesel', 'Diesil', 'Digby', 'Dilan', 'Dilano', 'Dillan', 'Dillon', 'Dilraj', 'Dimitri', 'Dinaras', 'Dion', 'Dissanayake', 'Dmitri', 'Doire', 'Dolan', 'Domanic', 'Domenico', 'Domhnall', 'Dominic', 'Dominick', 'Dominik', 'Donald', 'Donnacha', 'Donnie', 'Dorian', 'Dougal', 'Douglas', 'Dougray', 'Drakeo', 'Dre', 'Dregan', 'Drew', 'Dugald', 'Duncan', 'Duriel', 'Dustin', 'Dylan', 'Dylan-Jack', 'Dylan-James', 'Dylan-John', 'Dylan-Patrick', 'Dylin', 'Dyllan', 'Dyllan-James', 'Dyllon', 'Eadie', 'Eagann', 'Eamon', 'Eamonn', 'Eason', 'Eassan', 'Easton', 'Ebow', 'Ed', 'Eddie', 'Eden', 'Ediomi', 'Edison', 'Eduardo', 'Eduards', 'Edward', 'Edwin', 'Edwyn', 'Eesa', 'Efan', 'Efe', 'Ege', 'Ehsan', 'Ehsen', 'Eiddon', 'Eidhan', 'Eihli', 'Eimantas', 'Eisa', 'Eli', 'Elias', 'Elijah', 'Eliot', 'Elisau', 'Eljay', 'Eljon', 'Elliot', 'Elliott', 'Ellis', 'Ellisandro', 'Elshan', 'Elvin', 'Elyan', 'Emanuel', 'Emerson', 'Emil', 'Emile', 'Emir', 'Emlyn', 'Emmanuel', 'Emmet', 'Eng', 'Eniola', 'Enis', 'Ennis', 'Enrico', 'Enrique', 'Enzo', 'Eoghain', 'Eoghan', 'Eoin', 'Eonan', 'Erdehan', 'Eren', 'Erencem', 'Eric', 'Ericlee', 'Erik', 'Eriz', 'Ernie-Jacks', 'Eroni', 'Eryk', 'Eshan', 'Essa', 'Esteban', 'Ethan', 'Etienne', 'Etinosa', 'Euan', 'Eugene', 'Evan', 'Evann', 'Ewan', 'Ewen', 'Ewing', 'Exodi', 'Ezekiel', 'Ezra', 'Fabian', 'Fahad', 'Faheem', 'Faisal', 'Faizaan', 'Famara', 'Fares', 'Farhaan', 'Farhan', 'Farren', 'Farzad', 'Fauzaan', 'Favour', 'Fawaz', 'Fawkes', 'Faysal', 'Fearghus', 'Feden', 'Felix', 'Fergal', 'Fergie', 'Fergus', 'Ferre', 'Fezaan', 'Fiachra', 'Fikret', 'Filip', 'Filippo', 'Finan', 'Findlay', 'Findlay-James', 'Findlie', 'Finlay', 'Finley', 'Finn', 'Finnan', 'Finnean', 'Finnen', 'Finnlay', 'Finnley', 'Fintan', 'Fionn', 'Firaaz', 'Fletcher', 'Flint', 'Florin', 'Flyn', 'Flynn', 'Fodeba', 'Folarinwa', 'Forbes', 'Forgan', 'Forrest', 'Fox', 'Francesco', 'Francis', 'Francisco', 'Franciszek', 'Franco', 'Frank', 'Frankie', 'Franklin', 'Franko', 'Fraser', 'Frazer', 'Fred', 'Freddie', 'Frederick', 'Fruin', 'Fyfe', 'Fyn', 'Fynlay', 'Fynn', 'Gabriel', 'Gallagher', 'Gareth', 'Garren', 'Garrett', 'Garry', 'Gary', 'Gavin', 'Gavin-Lee', 'Gene', 'Geoff', 'Geoffrey', 'Geomer', 'Geordan', 'Geordie']

const getRandomInt = function (min, max) {
  	return Math.floor(Math.random() * (max - min)) + min
}

const generateName = function (num) {
  if (num === 1) {
    var name = first[getRandomInt(0, first.length + 1)]
  } else {
    var name = first[getRandomInt(0, first.length + 1)] + ' ' + last[getRandomInt(0, first.length + 1)]
  }

  return name
}

const names = document.getElementsByClassName('name-1')
const names_2 = document.getElementsByClassName('name-2')

if (names.length > 0) {
  for (let i = 0; i < names.length; i++) {
    const e = names[i]
    e.innerText = generateName(1)
  }
}

if (names_2.length > 0) {
  for (let i = 0; i < names_2.length; i++) {
    const e = names_2[i]
    e.innerText = generateName(2)
  }
}
const navbarToggle = document.getElementById('navbarToggle')
const navbar = document.getElementById('navbar')

navbarToggle.addEventListener('click', function () {
  if (navbar.classList.contains('md:hidden')) {
    navbar.classList.remove('md:hidden')
    navbar.classList.add('fadeIn')
  } else {
    const _classRemover = function () {
      navbar.classList.remove('fadeIn')
      navbar.classList.add('fadeOut')
      console.log('removed')
    }

    const animate = async function () {
      await _classRemover()
      console.log('animated')

      setTimeout(function () {
        navbar.classList.add('md:hidden')
        navbar.classList.remove('fadeOut')
      }, 450)
    }

    animate()
  };
})
const num = function (from, to) {
  return Math.floor(Math.random() * to) + from
}

// array of number
const numArr = function (length, max) {
  return Array.from({ length }, () => Math.floor(Math.random() * max))
}

// return 2 digit
const el_2 = document.getElementsByClassName('num-2')
const display_2 = function () {
  for (let i = 0; i < el_2.length; i++) {
    const e = el_2[i]

    e.innerText = num(1, 99)
  }
}

if (el_2.length > 0) {
  display_2()
}
// end 2 digit

// return 3 digit
const el_3 = document.getElementsByClassName('num-3')
const display_3 = function () {
  for (let i = 0; i < el_3.length; i++) {
    const e = el_3[i]

    e.innerText = num(99, 999)
  }
}

if (el_3.length > 0) {
  display_3()
}
// end 3 digit

// return 4 digit
const el_4 = document.getElementsByClassName('num-4')
const display_4 = function () {
  for (let i = 0; i < el_4.length; i++) {
    const e = el_4[i]

    e.innerText = num(999, 9999)
  }
}

if (el_4.length > 0) {
  display_4()
}
// end 4 digits

// work with sidebar
var btn = document.getElementById('sliderBtn')
const sideBar = document.getElementById('sideBar')
const sideBarHideBtn = document.getElementById('sideBarHideBtn')

// show sidebar
btn.addEventListener('click', function () {
  if (sideBar.classList.contains('md:-ml-64')) {
    sideBar.classList.replace('md:-ml-64', 'md:ml-0')
    sideBar.classList.remove('md:slideOutLeft')
    sideBar.classList.add('md:slideInLeft')
  };
})

// hide sideBar
sideBarHideBtn.addEventListener('click', function () {
  if (sideBar.classList.contains('md:ml-0', 'slideInLeft')) {
    const _class = function () {
      sideBar.classList.remove('md:slideInLeft')
      sideBar.classList.add('md:slideOutLeft')

      console.log('hide')
    }
    const animate = async function () {
      await _class()

      setTimeout(function () {
        sideBar.classList.replace('md:ml-0', 'md:-ml-64')
        console.log('animated')
      }, 300)
    }

    _class()
    animate()
  };
})
// end with sidebar

var options = function (type, height, numbers, color) {
  return {
    chart: {
      height,
      width: '100%',
      type,
      sparkline: {
        enabled: true
      },
      toolbar: {
        show: false
      }
    },
    grid: {
      show: false,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    series: [
      {
        name: 'serie1',
        data: numbers
      }
    ],
    fill: {
      colors: [color]
    },
    stroke: {
      colors: [color],
      width: 3
    },
    yaxis: {
      show: false
    },
    xaxis: {
      show: false,
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      tooltip: {
        enabled: false
      }
    }

  }
}

const analytics_1 = document.getElementsByClassName('analytics_1')

if (analytics_1 != null && typeof (analytics_1) !== 'undefined') {
  var chart = new ApexCharts(analytics_1[0], options('area', '51px', numArr(10, 99), '#4fd1c5'))
  const chart_1 = new ApexCharts(analytics_1[1], options('area', '51px', numArr(10, 99), '#4c51bf'))
  chart.render()
  chart_1.render()
}

const sealsOptions = {
  chart: {
    height: 350,
    type: 'line',
    stacked: false
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#99C2A2', '#C5EDAC', '#66C7F4'],
  series: [

    {
      name: 'Column A',
      type: 'column',
      data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5]
    },
    {
      name: 'Column B',
      type: 'column',
      data: [10, 19, 27, 26, 34, 35, 40, 38]
    },
    {
      name: 'Line C',
      type: 'column',
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    }
  ],
  stroke: {
    width: [4, 4, 4]
  },
  plotOptions: {
    bar: {
      columnWidth: '20%'
    }
  },
  xaxis: {
    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
  },
  yaxis: [
    {
      seriesName: 'Column A',
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true
      },
      title: {
        text: 'Columns'
      }
    },
    {
      seriesName: 'Column A',
      show: false
    }, {
      opposite: true,
      seriesName: 'Line C',
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true
      },
      title: {
        text: 'Line'
      }
    }
  ],
  tooltip: {
    shared: false,
    intersect: true,
    x: {
      show: false
    }
  },
  legend: {
    horizontalAlign: 'left',
    offsetX: 40
  }
}

const sealsOverview = document.getElementById('sealsOverview')
const sealsOverviewChart = new ApexCharts(sealsOverview, options('bar', '100%', numArr(20, 999), '#30aba0'))
sealsOverviewChart.render()
var options = {
  chart: {
    //   height: 280,
    width: '100%',
    type: 'area',
    toolbar: {
      show: false
    }
  },
  grid: {
    show: false,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  series: [
    {
      name: 'serie1',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    },
    {
      name: 'serie2',
      data: [54, 45, 51, 57, 32, 33, 31, 31, 46, 37, 33]
    }
  ],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.9,
      opacityTo: 0.7,
      stops: [0, 90, 100]
    },
    colors: ['#4fd1c5']
  },
  stroke: {
    colors: ['#4fd1c5'],
    width: 3
  },
  yaxis: {
    show: false
  },
  xaxis: {
    categories: [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10],
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  }

}

const SummaryChart = document.getElementById('SummaryChart')

if (SummaryChart != null && typeof (SummaryChart) !== 'undefined') {
  var chart = new ApexCharts(document.querySelector('#SummaryChart'), options)
  chart.render()
}

/* PrismJS 1.19.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+http+javadoclike+json+jsonp+json5+markup-templating+php+phpdoc+plsql+python+sass+scss+sql&plugins=unescaped-markup+normalize-whitespace+toolbar+copy-to-clipboard */
const _self = typeof window !== 'undefined' ? window : typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self : {}; const Prism = (function (u) { const c = /\blang(?:uage)?-([\w-]+)\b/i; let r = 0; var C = { manual: u.Prism && u.Prism.manual, disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler, util: { encode: function e (r) { return r instanceof _ ? new _(r.type, e(r.content), r.alias) : Array.isArray(r) ? r.map(e) : r.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00A0/g, ' ') }, type: function (e) { return Object.prototype.toString.call(e).slice(8, -1) }, objId: function (e) { return e.__id || Object.defineProperty(e, '__id', { value: ++r }), e.__id }, clone: function n (e, t) { let a; let r; const i = C.util.type(e); switch (t = t || {}, i) { case 'Object':if (r = C.util.objId(e), t[r]) { return t[r] } for (const o in a = {}, t[r] = a, e) { e.hasOwnProperty(o) && (a[o] = n(e[o], t)) } return a; case 'Array':return r = C.util.objId(e), t[r] ? t[r] : (a = [], t[r] = a, e.forEach(function (e, r) { a[r] = n(e, t) }), a); default:return e } }, getLanguage: function (e) { for (;e && !c.test(e.className);) { e = e.parentElement } return e ? (e.className.match(c) || [, 'none'])[1].toLowerCase() : 'none' }, currentScript: function () { if (typeof document === 'undefined') { return null } if ('currentScript' in document) { return document.currentScript } try { throw new Error() } catch (e) { const r = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1]; if (r) { const n = document.getElementsByTagName('script'); for (const t in n) { if (n[t].src == r) { return n[t] } } } return null } } }, languages: { extend: function (e, r) { const n = C.util.clone(C.languages[e]); for (const t in r) { n[t] = r[t] } return n }, insertBefore: function (n, e, r, t) { const a = (t = t || C.languages)[n]; const i = {}; for (const o in a) { if (a.hasOwnProperty(o)) { if (o == e) { for (const l in r) { r.hasOwnProperty(l) && (i[l] = r[l]) } }r.hasOwnProperty(o) || (i[o] = a[o]) } } const s = t[n]; return t[n] = i, C.languages.DFS(C.languages, function (e, r) { r === s && e != n && (this[e] = i) }), i }, DFS: function e (r, n, t, a) { a = a || {}; const i = C.util.objId; for (const o in r) { if (r.hasOwnProperty(o)) { n.call(r, o, r[o], t || o); const l = r[o]; const s = C.util.type(l); s !== 'Object' || a[i(l)] ? s !== 'Array' || a[i(l)] || (a[i(l)] = !0, e(l, n, o, a)) : (a[i(l)] = !0, e(l, n, null, a)) } } } }, plugins: {}, highlightAll: function (e, r) { C.highlightAllUnder(document, e, r) }, highlightAllUnder: function (e, r, n) { const t = { callback: n, container: e, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' }; C.hooks.run('before-highlightall', t), t.elements = Array.prototype.slice.apply(t.container.querySelectorAll(t.selector)), C.hooks.run('before-all-elements-highlight', t); for (var a, i = 0; a = t.elements[i++];) { C.highlightElement(a, !0 === r, t.callback) } }, highlightElement: function (e, r, n) { const t = C.util.getLanguage(e); const a = C.languages[t]; e.className = e.className.replace(c, '').replace(/\s+/g, ' ') + ' language-' + t; const i = e.parentNode; i && i.nodeName.toLowerCase() === 'pre' && (i.className = i.className.replace(c, '').replace(/\s+/g, ' ') + ' language-' + t); const o = { element: e, language: t, grammar: a, code: e.textContent }; function l (e) { o.highlightedCode = e, C.hooks.run('before-insert', o), o.element.innerHTML = o.highlightedCode, C.hooks.run('after-highlight', o), C.hooks.run('complete', o), n && n.call(o.element) } if (C.hooks.run('before-sanity-check', o), !o.code) { return C.hooks.run('complete', o), void (n && n.call(o.element)) } if (C.hooks.run('before-highlight', o), o.grammar) { if (r && u.Worker) { const s = new Worker(C.filename); s.onmessage = function (e) { l(e.data) }, s.postMessage(JSON.stringify({ language: o.language, code: o.code, immediateClose: !0 })) } else { l(C.highlight(o.code, o.grammar, o.language)) } } else { l(C.util.encode(o.code)) } }, highlight: function (e, r, n) { const t = { code: e, grammar: r, language: n }; return C.hooks.run('before-tokenize', t), t.tokens = C.tokenize(t.code, t.grammar), C.hooks.run('after-tokenize', t), _.stringify(C.util.encode(t.tokens), t.language) }, matchGrammar: function (e, r, n, t, a, i, o) { for (const l in n) { if (n.hasOwnProperty(l) && n[l]) { let s = n[l]; s = Array.isArray(s) ? s : [s]; for (let u = 0; u < s.length; ++u) { if (o && o == l + ',' + u) { return } let c = s[u]; const g = c.inside; const f = !!c.lookbehind; const h = !!c.greedy; let d = 0; const m = c.alias; if (h && !c.pattern.global) { const p = c.pattern.toString().match(/[imsuy]*$/)[0]; c.pattern = RegExp(c.pattern.source, p + 'g') }c = c.pattern || c; for (let y = t, v = a; y < r.length; v += r[y].length, ++y) { let k = r[y]; if (r.length > e.length) { return } if (!(k instanceof _)) { if (h && y != r.length - 1) { if (c.lastIndex = v, !(S = c.exec(e))) { break } for (var b = S.index + (f && S[1] ? S[1].length : 0), w = S.index + S[0].length, A = y, P = v, x = r.length; A < x && (P < w || !r[A].type && !r[A - 1].greedy); ++A) { (P += r[A].length) <= b && (++y, v = P) } if (r[y] instanceof _) { continue } O = A - y, k = e.slice(v, P), S.index -= v } else { c.lastIndex = 0; var S = c.exec(k); var O = 1 } if (S) { f && (d = S[1] ? S[1].length : 0); w = (b = S.index + d) + (S = S[0].slice(d)).length; const E = k.slice(0, b); const N = k.slice(w); const j = [y, O]; E && (++y, v += E.length, j.push(E)); const L = new _(l, g ? C.tokenize(S, g) : S, m, S, h); if (j.push(L), N && j.push(N), Array.prototype.splice.apply(r, j), O != 1 && C.matchGrammar(e, r, n, y, v, !0, l + ',' + u), i) { break } } else if (i) { break } } } } } } }, tokenize: function (e, r) { const n = [e]; const t = r.rest; if (t) { for (const a in t) { r[a] = t[a] } delete r.rest } return C.matchGrammar(e, n, r, 0, 0, !1), n }, hooks: { all: {}, add: function (e, r) { const n = C.hooks.all; n[e] = n[e] || [], n[e].push(r) }, run: function (e, r) { const n = C.hooks.all[e]; if (n && n.length) { for (var t, a = 0; t = n[a++];) { t(r) } } } }, Token: _ }; function _ (e, r, n, t, a) { this.type = e, this.content = r, this.alias = n, this.length = 0 | (t || '').length, this.greedy = !!a } if (u.Prism = C, _.stringify = function r (e, n) { if (typeof e === 'string') { return e } if (Array.isArray(e)) { let t = ''; return e.forEach(function (e) { t += r(e, n) }), t } const a = { type: e.type, content: r(e.content, n), tag: 'span', classes: ['token', e.type], attributes: {}, language: n }; const i = e.alias; i && (Array.isArray(i) ? Array.prototype.push.apply(a.classes, i) : a.classes.push(i)), C.hooks.run('wrap', a); let o = ''; for (const l in a.attributes) { o += ' ' + l + '="' + (a.attributes[l] || '').replace(/"/g, '&quot;') + '"' } return '<' + a.tag + ' class="' + a.classes.join(' ') + '"' + o + '>' + a.content + '</' + a.tag + '>' }, !u.document) { return u.addEventListener && (C.disableWorkerMessageHandler || u.addEventListener('message', function (e) { const r = JSON.parse(e.data); const n = r.language; const t = r.code; const a = r.immediateClose; u.postMessage(C.highlight(t, C.languages[n], n)), a && u.close() }, !1)), C } const e = C.util.currentScript(); function n () { C.manual || C.highlightAll() } if (e && (C.filename = e.src, e.hasAttribute('data-manual') && (C.manual = !0)), !C.manual) { const t = document.readyState; t === 'loading' || t === 'interactive' && e && e.defer ? document.addEventListener('DOMContentLoaded', n) : window.requestAnimationFrame ? window.requestAnimationFrame(n) : window.setTimeout(n, 16) } return C }(_self)); typeof module !== 'undefined' && module.exports && (module.exports = Prism), typeof global !== 'undefined' && (global.Prism = Prism)
Prism.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i, greedy: !0 }, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, 'attr-value': { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i, inside: { punctuation: [/^=/, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }] } }, punctuation: /\/?>/, 'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: /&#?[\da-z]{1,8};/i }, Prism.languages.markup.tag.inside['attr-value'].inside.entity = Prism.languages.markup.entity, Prism.hooks.add('wrap', function (a) { a.type === 'entity' && (a.attributes.title = a.content.replace(/&amp;/, '&')) }), Object.defineProperty(Prism.languages.markup.tag, 'addInlined', { value: function (a, e) { const s = {}; s['language-' + e] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: Prism.languages[e] }, s.cdata = /^<!\[CDATA\[|\]\]>$/i; const n = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s } }; n['language-' + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] }; const t = {}; t[a] = { pattern: RegExp('(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)'.replace(/__/g, a), 'i'), lookbehind: !0, greedy: !0, inside: n }, Prism.languages.insertBefore('markup', 'cdata', t) } }), Prism.languages.xml = Prism.languages.extend('markup', {}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup
!(function (s) { const e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/; s.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, 'selector-function-argument': { pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/, lookbehind: !0, alias: 'selector' } } }, url: { pattern: RegExp('url\\((?:' + e.source + '|[^\n\r()]*)\\)', 'i'), inside: { function: /^url/i, punctuation: /^\(|\)$/ } }, selector: RegExp("[^{}\\s](?:[^{};\"']|" + e.source + ')*?(?=\\s*\\{)'), string: { pattern: e, greedy: !0 }, property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i, important: /!important\b/i, function: /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:,]/ }, s.languages.css.atrule.inside.rest = s.languages.css; const t = s.languages.markup; t && (t.tag.addInlined('style', 'css'), s.languages.insertBefore('inside', 'attr-value', { 'style-attr': { pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i, inside: { 'attr-name': { pattern: /^\s*style/i, inside: t.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, 'attr-value': { pattern: /.+/i, inside: s.languages.css } }, alias: 'language-css' } }, t.tag)) }(Prism))
Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, 'class-name': { pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ }
Prism.languages.javascript = Prism.languages.extend('clike', { 'class-name': [Prism.languages.clike['class-name'], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/ }), Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore('javascript', 'keyword', { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: !0, greedy: !0 }, 'function-variable': { pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: 'function' }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: Prism.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: !0, inside: Prism.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), Prism.languages.insertBefore('javascript', 'string', { 'template-string': { pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/, greedy: !0, inside: { 'template-punctuation': { pattern: /^`|`$/, alias: 'string' }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/, lookbehind: !0, inside: { 'interpolation-punctuation': { pattern: /^\${|}$/, alias: 'punctuation' }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } } }), Prism.languages.markup && Prism.languages.markup.tag.addInlined('script', 'javascript'), Prism.languages.js = Prism.languages.javascript
!(function (t) { t.languages.http = { 'request-line': { pattern: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m, inside: { property: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/, 'attr-name': /:\w+/ } }, 'response-status': { pattern: /^HTTP\/1.[01] \d+.*/m, inside: { property: { pattern: /(^HTTP\/1.[01] )\d+.*/i, lookbehind: !0 } } }, 'header-name': { pattern: /^[\w-]+:(?=.)/m, alias: 'keyword' } }; let a; let e; let n; const i = t.languages; const p = { 'application/javascript': i.javascript, 'application/json': i.json || i.javascript, 'application/xml': i.xml, 'text/xml': i.xml, 'text/html': i.html, 'text/css': i.css }; const s = { 'application/json': !0, 'application/xml': !0 }; for (const r in p) { if (p[r]) { a = a || {}; const T = s[r] ? (void 0, n = (e = r).replace(/^[a-z]+\//, ''), '(?:' + e + '|\\w+/(?:[\\w.-]+\\+)+' + n + '(?![+\\w.-]))') : r; a[r.replace(/\//g, '-')] = { pattern: RegExp('(content-type:\\s*' + T + '[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*', 'i'), lookbehind: !0, inside: p[r] } } }a && t.languages.insertBefore('http', 'header-name', a) }(Prism))
!(function (h) { function v (e, n) { return '___' + e.toUpperCase() + n + '___' }Object.defineProperties(h.languages['markup-templating'] = {}, { buildPlaceholders: { value: function (a, r, e, o) { if (a.language === r) { const c = a.tokenStack = []; a.code = a.code.replace(e, function (e) { if (typeof o === 'function' && !o(e)) { return e } for (var n, t = c.length; a.code.includes(n = v(r, t));) { ++t } return c[t] = e, n }), a.grammar = h.languages.markup } } }, tokenizePlaceholders: { value: function (p, k) { if (p.language === k && p.tokenStack) { p.grammar = h.languages[k]; let m = 0; const d = Object.keys(p.tokenStack); !(function e (n) { for (let t = 0; t < n.length && !(m >= d.length); t++) { const a = n[t]; if (typeof a === 'string' || a.content && typeof a.content === 'string') { const r = d[m]; const o = p.tokenStack[r]; const c = typeof a === 'string' ? a : a.content; const i = v(k, r); const u = c.indexOf(i); if (u > -1) { ++m; const g = c.substring(0, u); const l = new h.Token(k, h.tokenize(o, p.grammar), 'language-' + k, o); const s = c.substring(u + i.length); const f = []; g && f.push.apply(f, e([g])), f.push(l), s && f.push.apply(f, e([s])), typeof a === 'string' ? n.splice.apply(n, [t, 1].concat(f)) : a.content = f } } else { a.content && e(a.content) } } return n }(p.tokens)) } } } }) }(Prism))
!(function (n) { n.languages.php = n.languages.extend('clike', { keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i, boolean: { pattern: /\b(?:false|true)\b/i, alias: 'constant' }, constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i], comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 } }), n.languages.insertBefore('php', 'string', { 'shell-comment': { pattern: /(^|[^\\])#.*/, lookbehind: !0, alias: 'comment' } }), n.languages.insertBefore('php', 'comment', { delimiter: { pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i, alias: 'important' } }), n.languages.insertBefore('php', 'keyword', { variable: /\$+(?:\w+\b|(?={))/i, package: { pattern: /(\\|namespace\s+|use\s+)[\w\\]+/, lookbehind: !0, inside: { punctuation: /\\/ } } }), n.languages.insertBefore('php', 'operator', { property: { pattern: /(->)[\w]+/, lookbehind: !0 } }); const e = { pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/, lookbehind: !0, inside: n.languages.php }; n.languages.insertBefore('php', 'string', { 'nowdoc-string': { pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/, greedy: !0, alias: 'string', inside: { delimiter: { pattern: /^<<<'[^']+'|[a-z_]\w*;$/i, alias: 'symbol', inside: { punctuation: /^<<<'?|[';]$/ } } } }, 'heredoc-string': { pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i, greedy: !0, alias: 'string', inside: { delimiter: { pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i, alias: 'symbol', inside: { punctuation: /^<<<"?|[";]$/ } }, interpolation: e } }, 'single-quoted-string': { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0, alias: 'string' }, 'double-quoted-string': { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0, alias: 'string', inside: { interpolation: e } } }), delete n.languages.php.string, n.hooks.add('before-tokenize', function (e) { if (/<\?/.test(e.code)) { n.languages['markup-templating'].buildPlaceholders(e, 'php', /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi) } }), n.hooks.add('after-tokenize', function (e) { n.languages['markup-templating'].tokenizePlaceholders(e, 'php') }) }(Prism))
!(function (p) { const a = p.languages.javadoclike = { parameter: { pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m, lookbehind: !0 }, keyword: { pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m, lookbehind: !0 }, punctuation: /[{}]/ }; Object.defineProperty(a, 'addSupport', { value: function (a, e) { typeof a === 'string' && (a = [a]), a.forEach(function (a) { !(function (a, e) { const n = 'doc-comment'; let t = p.languages[a]; if (t) { let r = t[n]; if (!r) { const o = { 'doc-comment': { pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/, lookbehind: !0, alias: 'comment' } }; r = (t = p.languages.insertBefore(a, 'comment', o))[n] } if (r instanceof RegExp && (r = t[n] = { pattern: r }), Array.isArray(r)) { for (let i = 0, s = r.length; i < s; i++) { r[i] instanceof RegExp && (r[i] = { pattern: r[i] }), e(r[i]) } } else { e(r) } } }(a, function (a) { a.inside || (a.inside = {}), a.inside.rest = e })) }) } }), a.addSupport(['java', 'javascript', 'php'], a) }(Prism))
Prism.languages.json = { property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 }, string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 }, comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, number: /-?\d+\.?\d*(?:e[+-]?\d+)?/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:true|false)\b/, null: { pattern: /\bnull\b/, alias: 'keyword' } }
Prism.languages.jsonp = Prism.languages.extend('json', { punctuation: /[{}[\]();,.]/ }), Prism.languages.insertBefore('jsonp', 'punctuation', { function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/ })
!(function (n) { const e = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/; n.languages.json5 = n.languages.extend('json', { property: [{ pattern: RegExp(e.source + '(?=\\s*:)'), greedy: !0 }, { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*:)/, alias: 'unquoted' }], string: { pattern: e, greedy: !0 }, number: /[+-]?(?:NaN|Infinity|0x[a-fA-F\d]+|(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)/ }) }(Prism))
!(function (a) { const e = '(?:\\b[a-zA-Z]\\w*|[|\\\\[\\]])+'; a.languages.phpdoc = a.languages.extend('javadoclike', { parameter: { pattern: RegExp('(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:' + e + '\\s+)?)\\$\\w+'), lookbehind: !0 } }), a.languages.insertBefore('phpdoc', 'keyword', { 'class-name': [{ pattern: RegExp('(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)' + e), lookbehind: !0, inside: { keyword: /\b(?:callback|resource|boolean|integer|double|object|string|array|false|float|mixed|bool|null|self|true|void|int)\b/, punctuation: /[|\\[\]()]/ } }] }), a.languages.javadoclike.addSupport('php', a.languages.phpdoc) }(Prism))
Prism.languages.sql = { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0 }, variable: [{ pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 }, /@[\w.$]+/], string: { pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: !0, lookbehind: !0 }, function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i, keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i, boolean: /\b(?:TRUE|FALSE|NULL)\b/i, number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i, operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i, punctuation: /[;[\]()`,.]/ }
!(function (E) { const A = E.languages.plsql = E.languages.extend('sql', { comment: [/\/\*[\s\S]*?\*\//, /--.*/] }); let T = A.keyword; Array.isArray(T) || (T = A.keyword = [T]), T.unshift(/\b(?:ACCESS|AGENT|AGGREGATE|ARRAY|ARROW|AT|ATTRIBUTE|AUDIT|AUTHID|BFILE_BASE|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BYTE|CALLING|CHAR_BASE|CHARSET(?:FORM|ID)|CLOB_BASE|COLAUTH|COLLECT|CLUSTERS?|COMPILED|COMPRESS|CONSTANT|CONSTRUCTOR|CONTEXT|CRASH|CUSTOMDATUM|DANGLING|DATE_BASE|DEFINE|DETERMINISTIC|DURATION|ELEMENT|EMPTY|EXCEPTIONS?|EXCLUSIVE|EXTERNAL|FINAL|FORALL|FORM|FOUND|GENERAL|HEAP|HIDDEN|IDENTIFIED|IMMEDIATE|INCLUDING|INCREMENT|INDICATOR|INDEXES|INDICES|INFINITE|INITIAL|ISOPEN|INSTANTIABLE|INTERFACE|INVALIDATE|JAVA|LARGE|LEADING|LENGTH|LIBRARY|LIKE[24C]|LIMITED|LONG|LOOP|MAP|MAXEXTENTS|MAXLEN|MEMBER|MINUS|MLSLABEL|MULTISET|NAME|NAN|NATIVE|NEW|NOAUDIT|NOCOMPRESS|NOCOPY|NOTFOUND|NOWAIT|NUMBER(?:_BASE)?|OBJECT|OCI(?:COLL|DATE|DATETIME|DURATION|INTERVAL|LOBLOCATOR|NUMBER|RAW|REF|REFCURSOR|ROWID|STRING|TYPE)|OFFLINE|ONLINE|ONLY|OPAQUE|OPERATOR|ORACLE|ORADATA|ORGANIZATION|ORL(?:ANY|VARY)|OTHERS|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETERS?|PASCAL|PCTFREE|PIPE(?:LINED)?|PRAGMA|PRIOR|PRIVATE|RAISE|RANGE|RAW|RECORD|REF|REFERENCE|REM|REMAINDER|RESULT|RESOURCE|RETURNING|REVERSE|ROW(?:ID|NUM|TYPE)|SAMPLE|SB[124]|SEGMENT|SELF|SEPARATE|SEQUENCE|SHORT|SIZE(?:_T)?|SPARSE|SQL(?:CODE|DATA|NAME|STATE)|STANDARD|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUCCESSFUL|SYNONYM|SYSDATE|TABAUTH|TDO|THE|TIMEZONE_(?:ABBR|HOUR|MINUTE|REGION)|TRAILING|TRANSAC(?:TIONAL)?|TRUSTED|UB[124]|UID|UNDER|UNTRUSTED|VALIDATE|VALIST|VARCHAR2|VARIABLE|VARIANCE|VARRAY|VIEWS|VOID|WHENEVER|WRAPPED|ZONE)\b/i); let R = A.operator; Array.isArray(R) || (R = A.operator = [R]), R.unshift(/:=/) }(Prism))
Prism.languages.python = { comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 }, 'string-interpolation': { pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i, greedy: !0, inside: { interpolation: { pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/, lookbehind: !0, inside: { 'format-spec': { pattern: /(:)[^:(){}]+(?=}$)/, lookbehind: !0 }, 'conversion-option': { pattern: /![sra](?=[:}]$)/, alias: 'punctuation' }, rest: null } }, string: /[\s\S]+/ } }, 'triple-quoted-string': { pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]+?\1/i, greedy: !0, alias: 'string' }, string: { pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0 }, function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0 }, 'class-name': { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 }, decorator: { pattern: /(^\s*)@\w+(?:\.\w+)*/im, lookbehind: !0, alias: ['annotation', 'punctuation'], inside: { punctuation: /\./ } }, keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/, builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/, boolean: /\b(?:True|False|None)\b/, number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i, operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/, punctuation: /[{}[\];(),.:]/ }, Prism.languages.python['string-interpolation'].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python
!(function (e) { e.languages.sass = e.languages.extend('css', { comment: { pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m, lookbehind: !0 } }), e.languages.insertBefore('sass', 'atrule', { 'atrule-line': { pattern: /^(?:[ \t]*)[@+=].+/m, inside: { atrule: /(?:@[\w-]+|[+=])/m } } }), delete e.languages.sass.atrule; const t = /\$[-\w]+|#\{\$[-\w]+\}/; const a = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, { pattern: /(\s+)-(?=\s)/, lookbehind: !0 }]; e.languages.insertBefore('sass', 'property', { 'variable-line': { pattern: /^[ \t]*\$.+/m, inside: { punctuation: /:/, variable: t, operator: a } }, 'property-line': { pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m, inside: { property: [/[^:\s]+(?=\s*:)/, { pattern: /(:)[^:\s]+/, lookbehind: !0 }], punctuation: /:/, variable: t, operator: a, important: e.languages.sass.important } } }), delete e.languages.sass.property, delete e.languages.sass.important, e.languages.insertBefore('sass', 'punctuation', { selector: { pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/, lookbehind: !0 } }) }(Prism))
Prism.languages.scss = Prism.languages.extend('css', { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 }, atrule: { pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/, inside: { rule: /@[\w-]+/ } }, url: /(?:[-a-z]+-)?url(?=\()/i, selector: { pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m, inside: { parent: { pattern: /&/, alias: 'important' }, placeholder: /%[-\w]+/, variable: /\$[-\w]+|#\{\$[-\w]+\}/ } }, property: { pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/, inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ } } }), Prism.languages.insertBefore('scss', 'atrule', { keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 }] }), Prism.languages.insertBefore('scss', 'important', { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }), Prism.languages.insertBefore('scss', 'function', { placeholder: { pattern: /%[-\w]+/, alias: 'selector' }, statement: { pattern: /\B!(?:default|optional)\b/i, alias: 'keyword' }, boolean: /\b(?:true|false)\b/, null: { pattern: /\bnull\b/, alias: 'keyword' }, operator: { pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/, lookbehind: !0 } }), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss
typeof self !== 'undefined' && self.Prism && self.document && Prism.languages.markup && (Prism.plugins.UnescapedMarkup = !0, Prism.hooks.add('before-highlightall', function (e) { e.selector += ", [class*='lang-'] script[type='text/plain'], [class*='language-'] script[type='text/plain'], script[type='text/plain'][class*='lang-'], script[type='text/plain'][class*='language-']" }), Prism.hooks.add('before-sanity-check', function (t) { if ((t.element.matches || t.element.msMatchesSelector).call(t.element, "script[type='text/plain']")) { const e = document.createElement('code'); return (a = document.createElement('pre')).className = e.className = t.element.className, t.element.dataset && Object.keys(t.element.dataset).forEach(function (e) { Object.prototype.hasOwnProperty.call(t.element.dataset, e) && (a.dataset[e] = t.element.dataset[e]) }), t.code = t.code.replace(/&lt;\/script(>|&gt;)/gi, '<\/script>'), e.textContent = t.code, a.appendChild(e), t.element.parentNode.replaceChild(a, t.element), void (t.element = e) } var a = t.element.parentNode; !t.code && a && a.nodeName.toLowerCase() == 'pre' && t.element.childNodes.length && t.element.childNodes[0].nodeName == '#comment' && (t.element.textContent = t.code = t.element.childNodes[0].textContent) }))
!(function () { const i = Object.assign || function (e, n) { for (const t in n) { n.hasOwnProperty(t) && (e[t] = n[t]) } return e }; function e (e) { this.defaults = i({}, e) } function l (e) { for (var n = 0, t = 0; t < e.length; ++t) { e.charCodeAt(t) == '\t'.charCodeAt(0) && (n += 3) } return e.length + n }e.prototype = { setDefaults: function (e) { this.defaults = i(this.defaults, e) }, normalize: function (e, n) { for (const t in n = i(this.defaults, n)) { const r = t.replace(/-(\w)/g, function (e, n) { return n.toUpperCase() }); t !== 'normalize' && r !== 'setDefaults' && n[t] && this[r] && (e = this[r].call(this, e, n[t])) } return e }, leftTrim: function (e) { return e.replace(/^\s+/, '') }, rightTrim: function (e) { return e.replace(/\s+$/, '') }, tabsToSpaces: function (e, n) { return n = 0 | n || 4, e.replace(/\t/g, new Array(++n).join(' ')) }, spacesToTabs: function (e, n) { return n = 0 | n || 4, e.replace(RegExp(' {' + n + '}', 'g'), '\t') }, removeTrailing: function (e) { return e.replace(/\s*?$/gm, '') }, removeInitialLineFeed: function (e) { return e.replace(/^(?:\r?\n|\r)/, '') }, removeIndent: function (e) { const n = e.match(/^[^\S\n\r]*(?=\S)/gm); return n && n[0].length ? (n.sort(function (e, n) { return e.length - n.length }), n[0].length ? e.replace(RegExp('^' + n[0], 'gm'), '') : e) : e }, indent: function (e, n) { return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++n).join('\t') + '$&') }, breakLines: function (e, n) { n = !0 === n ? 80 : 0 | n || 80; for (var t = e.split('\n'), r = 0; r < t.length; ++r) { if (!(l(t[r]) <= n)) { for (var i = t[r].split(/(\s+)/g), o = 0, a = 0; a < i.length; ++a) { const s = l(i[a]); n < (o += s) && (i[a] = '\n' + i[a], o = s) }t[r] = i.join('') } } return t.join('\n') } }, typeof module !== 'undefined' && module.exports && (module.exports = e), typeof Prism !== 'undefined' && (Prism.plugins.NormalizeWhitespace = new e({ 'remove-trailing': !0, 'remove-indent': !0, 'left-trim': !0, 'right-trim': !0 }), Prism.hooks.add('before-sanity-check', function (e) { const n = Prism.plugins.NormalizeWhitespace; if (!e.settings || !1 !== e.settings['whitespace-normalization']) { if (e.element && e.element.parentNode || !e.code) { const t = e.element.parentNode; const r = /(?:^|\s)no-whitespace-normalization(?:\s|$)/; if (e.code && t && t.nodeName.toLowerCase() === 'pre' && !r.test(t.className) && !r.test(e.element.className)) { for (var i = t.childNodes, o = '', a = '', s = !1, l = 0; l < i.length; ++l) { const c = i[l]; c == e.element ? s = !0 : c.nodeName === '#text' && (s ? a += c.nodeValue : o += c.nodeValue, t.removeChild(c), --l) } if (e.element.children.length && Prism.plugins.KeepMarkup) { const u = o + e.element.innerHTML + a; e.element.innerHTML = n.normalize(u, e.settings), e.code = e.element.textContent } else { e.code = o + e.code + a, e.code = n.normalize(e.code, e.settings) } } } else { e.code = n.normalize(e.code, e.settings) } } })) }())
!(function () { if (typeof self !== 'undefined' && self.Prism && self.document) { const i = []; const l = {}; const c = function () {}; Prism.plugins.toolbar = {}; const e = Prism.plugins.toolbar.registerButton = function (e, n) { let t; t = typeof n === 'function' ? n : function (e) { let t; return typeof n.onClick === 'function' ? ((t = document.createElement('button')).type = 'button', t.addEventListener('click', function () { n.onClick.call(this, e) })) : typeof n.url === 'string' ? (t = document.createElement('a')).href = n.url : t = document.createElement('span'), n.className && t.classList.add(n.className), t.textContent = n.text, t }, e in l ? console.warn('There is a button with the key "' + e + '" registered already.') : i.push(l[e] = t) }; const t = Prism.plugins.toolbar.hook = function (a) { const e = a.element.parentNode; if (e && /pre/i.test(e.nodeName) && !e.parentNode.classList.contains('code-toolbar')) { const t = document.createElement('div'); t.classList.add('code-toolbar'), e.parentNode.insertBefore(t, e), t.appendChild(e); const r = document.createElement('div'); r.classList.add('toolbar'); let n = i; const o = (function (e) { for (;e;) { let t = e.getAttribute('data-toolbar-order'); if (t != null) { return (t = t.trim()).length ? t.split(/\s*,\s*/g) : [] } e = e.parentElement } }(a.element)); o && (n = o.map(function (e) { return l[e] || c })), n.forEach(function (e) { const t = e(a); if (t) { const n = document.createElement('div'); n.classList.add('toolbar-item'), n.appendChild(t), r.appendChild(n) } }), t.appendChild(r) } }; e('label', function (e) { const t = e.element.parentNode; if (t && /pre/i.test(t.nodeName) && t.hasAttribute('data-label')) { let n; let a; const r = t.getAttribute('data-label'); try { a = document.querySelector('template#' + r) } catch (e) {} return a ? n = a.content : (t.hasAttribute('data-url') ? (n = document.createElement('a')).href = t.getAttribute('data-url') : n = document.createElement('span'), n.textContent = r), n } }), Prism.hooks.add('complete', t) } }())
!(function () { if (typeof self !== 'undefined' && self.Prism && self.document) { if (Prism.plugins.toolbar) { let r = window.ClipboardJS || void 0; r || typeof require !== 'function' || (r = require('clipboard')); const i = []; if (!r) { const o = document.createElement('script'); const e = document.querySelector('head'); o.onload = function () { if (r = window.ClipboardJS) { for (;i.length;) { i.pop()() } } }, o.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js', e.appendChild(o) }Prism.plugins.toolbar.registerButton('copy-to-clipboard', function (e) { const t = document.createElement('button'); return t.textContent = 'Copy', r ? o() : i.push(o), t; function o () { const o = new r(t, { text: function () { return e.code } }); o.on('success', function () { t.textContent = 'Copied!', n() }), o.on('error', function () { t.textContent = 'Press Ctrl+C to copy', n() }) } function n () { setTimeout(function () { t.textContent = 'Copy' }, 5e3) } }) } else { console.warn('Copy to Clipboard plugin loaded before Toolbar plugin.') } } }())
