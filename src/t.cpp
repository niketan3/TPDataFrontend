#include<bits/stdc++.h>
 typedef long long ll;
using namespace std;

int main (){
    int n,m;
    cin>>n>>m;
    int arr[n][m];
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<m;j++)
        {
            cin>>arr[i][j];
        }
    }
    int x;
    cin>>x;
    int ans1,ans2;
    for(int i=0;i<n;i++)
    {
        int flag=0;
        for(int j=0;j<m;j++)
        {
         
            if(arr[i][j]>x)
            {
                
                flag=1;
                ans1=i;
                ans2=j;
                break;
            }
        }
        if(flag)
        {
            break;
        }
    }
    cout<<ans1<<" "<<ans2<<endl;
    return 0;
}