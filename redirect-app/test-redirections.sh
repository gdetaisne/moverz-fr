#!/bin/bash

# 🔍 Script de test des redirections 301
# Teste tous les domaines ville pour vérifier qu'ils redirigent correctement vers moverz.fr

echo "======================================"
echo "🔍 TEST DES REDIRECTIONS 301"
echo "======================================"
echo ""

# Couleurs pour le terminal
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Fonction pour tester une redirection
test_redirect() {
    local domain=$1
    local expected=$2
    
    echo -n "Testing $domain ... "
    
    # Faire le curl avec -L pour suivre les redirections
    response=$(curl -I -s -L -w "%{http_code} %{url_effective}" "$domain" | tail -n 1)
    http_code=$(echo $response | awk '{print $1}')
    final_url=$(echo $response | awk '{print $2}')
    
    # Vérifier le code de réponse
    if [[ $http_code == "301" ]] || [[ $http_code == "200" ]]; then
        if [[ $final_url == *"$expected"* ]]; then
            echo -e "${GREEN}✅ OK${NC} ($http_code → $final_url)"
        else
            echo -e "${RED}❌ ERREUR${NC} - Redirige vers $final_url au lieu de $expected"
        fi
    elif [[ $http_code == "404" ]]; then
        echo -e "${RED}❌ 404 NOT FOUND${NC}"
    elif [[ $http_code == "000" ]]; then
        echo -e "${RED}❌ CONNEXION IMPOSSIBLE${NC} (DNS ou serveur down)"
    else
        echo -e "${YELLOW}⚠️  Statut inattendu${NC}: $http_code"
    fi
}

echo "🏠 Test des pages d'accueil (home):"
echo "-----------------------------------"
test_redirect "https://devis-demenageur-marseille.fr/" "moverz.fr/demenagement/marseille"
test_redirect "https://devis-demenageur-lyon.fr/" "moverz.fr/demenagement/lyon"
test_redirect "https://bordeaux-demenageur.fr/" "moverz.fr/demenagement/bordeaux"
test_redirect "https://devis-demenageur-lille.fr/" "moverz.fr/demenagement/lille"
test_redirect "https://devis-demenageur-nice.fr/" "moverz.fr/demenagement/nice"
test_redirect "https://devis-demenageur-toulousain.fr/" "moverz.fr/demenagement/toulouse"
test_redirect "https://devis-demenageur-strasbourg.fr/" "moverz.fr/demenagement/strasbourg"
test_redirect "https://devis-demenageur-nantes.fr/" "moverz.fr/demenagement/nantes"
test_redirect "https://devis-demenageur-rennes.fr/" "moverz.fr/demenagement/rennes"
test_redirect "https://devis-demenageur-rouen.fr/" "moverz.fr/demenagement/rouen"
test_redirect "https://devis-demenageur-montpellier.fr/" "moverz.fr/demenagement/montpellier"

echo ""
echo "🏘️  Test des pages quartiers (échantillon):"
echo "-----------------------------------"
test_redirect "https://devis-demenageur-nice.fr/vieux-nice" "moverz.fr/nice/vieux-nice"
test_redirect "https://devis-demenageur-marseille.fr/vieux-port" "moverz.fr/marseille/vieux-port"
test_redirect "https://devis-demenageur-lyon.fr/presquile" "moverz.fr/lyon/presquile"

echo ""
echo "🚚 Test des pages corridors (échantillon):"
echo "-----------------------------------"
test_redirect "https://devis-demenageur-nice.fr/nice-vers-paris" "moverz.fr/nice-vers-paris"
test_redirect "https://devis-demenageur-marseille.fr/marseille-vers-lyon" "moverz.fr/marseille-vers-lyon"
test_redirect "https://devis-demenageur-toulouse.fr/toulouse-vers-paris" "moverz.fr/toulouse-vers-paris"

echo ""
echo "======================================"
echo "✅ Tests terminés"
echo "======================================"
echo ""
echo "💡 Si des tests échouent avec '404 NOT FOUND' :"
echo "   → L'app de redirection n'est pas déployée sur CapRover"
echo ""
echo "💡 Si des tests échouent avec 'CONNEXION IMPOSSIBLE' :"
echo "   → Problème DNS ou serveur down"
echo ""
echo "💡 Pour déployer l'app :"
echo "   1. cd redirect-app"
echo "   2. caprover deploy"
echo "   3. Configurer les domaines dans CapRover Dashboard"
echo ""

