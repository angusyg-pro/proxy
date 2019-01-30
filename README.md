# Proxy de rebond en local vers la PFD

## Besoin

Des applications du Cloud PROBTP ont besoin d'accéder à la PFD, et le Cloud PROBTP n'y ayant pas accès, il est nécessaire de faire un rebond par un proxy fonctionnant sur une machine de DEV.

## Installation du proxy

Le zip du proxy à installer sur les machines de DEV est disponible ici:

https://URL_CONTAINER_CLOUD/proxy-cloud-to-pfd.zip

Pour installer le proxy, seulement le dézipper dans le dossier de votre choix. 
Différents batchs permettent sa gestion:
* *demarrage.bat*: démarre le proxy
* *arret.bat*: arrête le proxy
* *logs.bat*: affiche les logs du proxy
* *status.bat*: affiche le status du proxy

Afin de démarrer le proxy en arrière plan au démarrage de la machine, il suffit de créer un raccourci (copier/coller le racourci) le batch de démarrage dans le dossier *C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup*.

## Modification du port

Le port par défaut est le port 8888. Si une modification du port est nécessaire, il faut alors, arrêter le proxy et modifier le port dans le fichier *ecosystem.config.js* dans l'environnement *production*.
