#! /bin/bash

	clear && printf '\e[3J'


	echo "\033[1;42m Vamos a crear un nuevo proyecto \033[0m"
	echo "\033[1;31m Ojo, antes de seguir asegurate de tener el nuevo repositorio vacio ya clonado en Sites/ \033[0m"
	echo "¿Cual es el nombre de la carpeta?"
    read proyecto
	
	echo "Vamos a configurar el proyecto en la carpeta Sites/"$proyecto
	echo "\033[1;41m Antes haremos un git pull para asegurarnos de que el proyecto se crea con la última versión \033[0m"
	echo "Pulsa \033[1;42m ENTER \033[0m si es correcto o \033[1;41m CTRL C \033[0m para cancelar"
    read standby
	
	#git pull origin master
	
	#miramos que haya .git en esa carpeta

if [ -d "/Users/$USER/Sites/$proyecto/.git" ] 
then
   
	echo "Copiando archivos"	
	rsync -r  ./src /Users/$USER/Sites/$proyecto/ --exclude '_core*.*' --exclude '*.js' --delete  
	echo "\033[1;42m Listo! \033[0m"
   
   
	echo "Creando enlaces simbolicos node_modules y arhivos de configuración"	
	echo "\033[1;31m Recuerda que la carpeta node_modules y los arhivos de configuración son compartidos para todos los proyectos \033[0m"   	
	
	#Node modules
	ln -s $PWD/node_modules /Users/$USER/Sites/$proyecto/node_modules
	
	#Config files
	# ln -s $PWD/.browserslistrc	/Users/$USER/Sites/$proyecto/_browserslistrc
	# ln -s $PWD/.editorconfig	/Users/$USER/Sites/$proyecto/_editorconfig
	# ln -s $PWD/.htaccess	/Users/$USER/Sites/$proyecto/_htaccess
	# ln -s $PWD/.imageminrd	/Users/$USER/Sites/$proyecto/_imageminrd
	# ln -s $PWD/.postcssrc	/Users/$USER/Sites/$proyecto/_postcssrc
	# ln -s $PWD/.posthtmlrc	/Users/$USER/Sites/$proyecto/_posthtmlrc
	# ln -s $PWD/imagemin.config.js	/Users/$USER/Sites/$proyecto/_imagemin.config.js
	# ln -s $PWD/package-lock.json	/Users/$USER/Sites/$proyecto/_package-lock.json
    # ln -s $PWD/package.json		/Users/$USER/Sites/$proyecto/_package.json
	
	ls -d $PWD/* > temp.txt
	ls -p | grep -v / > temp2.txt
	sed -i "" 's/src/ln -s $PWD\/src/g' "temp.txt"	
	sed -i "" 's/.\/ln/ln/g' "temp.txt"
	
	sed -i "" "s/.src/\/Users\/$USER\/Sites\/$proyecto\/src/g" "temp2.txt"
	sed -i "" 's/.\/Users/\/Users/g' "temp2.txt"
	
	paste -d" " temp.txt temp2.txt > final.txt	

	#Core files .scss
	find ./src -name _core* > temp.txt
	cp temp.txt temp2.txt
	sed -i "" 's/src/ln -s $PWD\/src/g' "temp.txt"	
	sed -i "" 's/.\/ln/ln/g' "temp.txt"
	
	sed -i "" "s/.src/\/Users\/$USER\/Sites\/$proyecto\/src/g" "temp2.txt"
	sed -i "" 's/.\/Users/\/Users/g' "temp2.txt"
	
	paste -d" " temp.txt temp2.txt > final.txt
	
	
	bash final.txt
	#Eliminamos archivos
	rm	 temp.txt
	rm	 temp2.txt
	rm	final.txt
	
	
	#Core JS files
	find ./src -name *.js > temp.txt
	cp temp.txt temp2.txt
	sed -i "" 's/src/ln -s $PWD\/src/g' "temp.txt"	
	sed -i "" 's/.\/ln/ln/g' "temp.txt"

	
	sed -i "" "s/.src/\/Users\/$USER\/Sites\/$proyecto\/src/g" "temp2.txt"
	sed -i "" 's/.\/Users/\/Users/g' "temp2.txt"
	
	paste -d" " temp.txt temp2.txt > final.txt
	
	
	bash final.txt
	#Eliminamos archivos
	# rm	 temp.txt
	# rm	 temp2.txt
	# rm	final.txt
		
	
	#Utils JS
	
	#Vendors
	
	
	echo "\033[1;42m Listo! \033[0m"
	
	echo "Vamos a subir al repositorio el contenido inicial"
	echo "Pulsa \033[1;42m ENTER \033[0m para continuar o \033[1;41m CTRL C \033[0m para cancelar y subirlo de manera manual"
    read standby
    
    cd /Users/$USER/Sites/$proyecto/
    # git add .
    # git commit -m 'baseCore Installed'
    # git push
	echo "\033[1;42m Listo! \033[0m"
    
	echo "Pulsa \033[1;42m ENTER \033[0m para arrancar parcel o \033[1;41m CTRL C \033[0m para cancelar y arrancarlo de manera manual"
    
    read standby
	cd /Users/$USER/Sites/$proyecto/
	npm start	
    
else
    echo "Error: Ese proyecto no tiene git, antes de seguir clona el repositorio"
fi
