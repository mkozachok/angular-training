 __mainApp.service('authenticateService', ['shareService', '$localStorage', function(share, storage)
 {
 		console.log('authenticateService has been started');
 		this.addProfile = function(name, email, password)
 		{
 			var passwordSalted =  CryptoJS.SHA3(email+name+password);
 			var Profile = {
 				userLogin: name,
 				userEmail: email,
 				userPassword: passwordSalted.toString(CryptoJS.enc.Latin1)
 			};

 			var Profiles = storage.profiles;
 			if(undefined === Profiles)
 				Profiles = [];

 			Profiles.push(Profile);
 			storage.profiles = Profiles;

 			return true;	
 		}

 		this.authenticateUserByEmail = function(email, password)
 		{
			var Profiles = storage.profiles;
 			if(undefined === Profiles)
 				Profiles = [];

 			for(var Profile of Profiles)
 			{
 				if(email === Profile.userEmail )
 				{
 					var passwordToTest =  CryptoJS.SHA3(email+Profile.userLogin+password);	
 					if( passwordToTest.toString(CryptoJS.enc.Latin1) === Profile.userPassword)
 					{ 
 						share.loggedUser = Profile.userLogin;
 						share.loggedUserId = Profile.userEmail;
 						share.isUserLogged = true;
 						return true;
 					}
 				}
 				
 			}
 			return false;
 		}

 }
 ]
 );
