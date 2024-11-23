import requests

def get_dolar_to_brl():
    url = "https://economia.awesomeapi.com.br/last/USD-BRL"
    try:
        response = requests.get(url)
        response.raise_for_status() 
        data = response.json()
        usd_brl = data["USDBRL"]["bid"]
        return float(usd_brl)
    except requests.RequestException as e:
        print(f"Error fetching exchange rate: {e}")
        return None